// const express = require("express");
// const { createServer } = require("http");
// const { Server } = require("socket.io");
// const { MongoClient, ObjectId } = require("mongodb");
// require("dotenv").config();

// let db;
// const dbNAME = process.env.DB_NAME;
// const dbURL = process.env.DB_URL; // 정보 !! @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // 'MongoDB 사이트에 있던 님들의 DB 접속 URL'
// const projectURL = process.env.PROJECT_URL;
// const serverPORT = process.env.PORT;

// const app = express(); // express 라이브러리를 사용하겠다는 뜻 // 익스프레스 사용법
// const server = createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: projectURL, // 정보 !! @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//     methods: ["GET", "POST"],
//   },
// });

// new MongoClient(dbURL)
//   .connect()
//   .then((client) => {
//     // MongoDB 접속코드, 접속성공시 DB 에 연결, 실패시 에러메세지
//     console.log("DB연결성공");
//     db = client.db(dbNAME); // dbNAME 는 process.env.DB_NAME 으로 DB 이름이며 자유작명
//     server.listen(serverPORT, () => {
//       // 어 이건 서버 실행코드인데?
//       // 그치! 디비 연결 성공하면 서버 실행해줘! 라고 하는 게 더 자연스러우니까
//       // 디비 연결 성공했을 때 같이 써주면 좋아!
//       console.log("서버 실행중", serverPORT); // 정보 !! @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // 클라이언트에서 보내는 값이 json 이므로 그걸 파싱해주는 미들웨어 함수
// app.use(express.json());

// // CORS 설정
// app.use((req, res, next) => {
//   // 정보 !! @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//   const allowedOrigin = projectURL;
//   const requestOrigin = req.headers.origin;

//   if (allowedOrigin === requestOrigin) {
//     // 쉽게 말해 서버와 연동된 서비스에서 보낸 요청에 대해서만 응답해줘 !! 라는 코드
//     res.header("Access-Control-Allow-Origin", allowedOrigin);
//   } else {
//     return res.status(403).json({ error: "Unauthorized request" });
//   }

//   // res.header("Access-Control-Allow-Origin", process.env.PROJECT_URL); // 응답헤더를 리액트 주소로 변경
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );

//   next();
// });

// app.post("/chat/request", async (요청, 응답) => {
//   const isExist1 = await db.collection("chat").findOne({
//     member: [new ObjectId(요청.body.loginId), new ObjectId(요청.body._id)],
//   });

//   const isExist2 = await db.collection("chat").findOne({
//     member: [new ObjectId(요청.body._id), new ObjectId(요청.body.loginId)],
//   });

//   const exist = isExist1 || isExist2;

//   if (exist) {
//     // 채팅방이 이미 존재하면
//     const existingChatRoomId = { insertedId: `${exist._id}` };
//     응답.json(existingChatRoomId);
//   } else {
//     // 채팅방이 존재하지 않으a면
//     const insertedChatRoom = await db.collection("chat").insertOne({
//       // 다큐먼트 삽입시 리턴값이 있음 console.log(insertedChatRoom) 해보면 앎
//       member: [new ObjectId(요청.body.loginId), new ObjectId(요청.body._id)],
//       memberProfileImages: [요청.body.loginIdProfileImg, 요청.body.image],
//       memberUsernames: [요청.body.loginIdUsername, 요청.body.username],
//       date: new Date(),
//       chatData: [],
//     });

//     응답.json(insertedChatRoom);
//   }

//   // 이거 안쓰면 프론트 단에서 then 내부코드가 실행되지 않던데 ..!
// });

// app.get("/chat", async (요청, 응답) => {
//   // 채팅 리스트 페이지 마운트시
//   // /chat 에 접속시 로그인된 계정과 채팅중인 채팅리스트 데이터 보내는 api
//   // console.log(요청.query);

//   const result = await db
//     .collection("chat")
//     .find({ member: new ObjectId(요청.query.loginId) })
//     .toArray();

//   응답.json(result);
// });

// app.get("/chat/:chatRoomId", async (요청, 응답) => {
//   // 1:1 방 접속시(마운트시)

//   const chatRoomDocument = await db
//     .collection("chat")
//     .find({ _id: new ObjectId(요청.params.chatRoomId) })
//     .toArray();

//   응답.json(chatRoomDocument);
// });

// io.on("connection", (socket) => {
//   // 어떤 유저가 웹소켓에 연결할 때마다 아래 코드 실행

//   socket.on("clientMsg", async ({ msg, roomId, from, to, whenSend }) => {
//     // console.log(
//     //   "clientMsg:",
//     //   msg,
//     //   "// roomId:",
//     //   roomId,
//     //   "// whoSend:",
//     //   from,
//     //   "// from:",
//     //   whenSend
//     // );

//     let result = await db.collection("chat").updateOne(
//       { _id: new ObjectId(roomId) },
//       {
//         $push: {
//           chatData: {
//             from: from,
//             to: to,
//             msg: msg,
//             whenSend: whenSend,
//           },
//         },
//       }
//     );
//     // console.log(result)

//     io.to(roomId).emit("serverMsg", {
//       from: from,
//       msg: msg,
//       whenSend: whenSend,
//     });
//   });

//   socket.on("ask-join", (roomId) => {
//     socket.join(roomId);
//   });
// });
