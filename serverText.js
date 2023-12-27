// 후에 env 파일로 관리할 민감정보들은 @@@ 로 표기함

// const express = require("express");
// const app = express(); // express 라이브러리를 사용하겠다는 뜻 // 익스프레스 사용법

// const { MongoClient, ObjectId } = require("mongodb");

// const { createServer } = require("http");
// const { Server } = require("socket.io");
// const server = createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     mathods: ["GET", "POST"],
//   },
// });

// let db;
// const url =
//   "@@@";
// // 'MongoDB 사이트에 있던 님들의 DB 접속 URL'
// new MongoClient(url)
//   .connect()
//   .then((client) => {
//     // MongoDB 접속코드, 접속성공시 @@@ 에 연결, 실패시 에러메세지
//     console.log("DB연결성공");
//     db = client.db("1nMarket"); // @@@ 는 DB 이름으로써 자유작명
//     server.listen(8080, () => {
//       // 어 이건 서버 실행코드인데?
//       // 그치! 디비 연결 성공하면 서버 실행해줘! 라고 하는 게 더 자연스러우니까
//       // 디비 연결 성공했을 때 같이 써주면 좋아!
//       console.log("http://localhost:8080 에서 서버 실행중");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // 클라이언트에서 보내는 값이 json 이므로 그걸 파싱해주는 미들웨어 함수
// app.use(express.json());

// // CORS 설정
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // 리액트 서버의 주소로 변경
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });
  
//   app.post("/chat/request", async (요청, 응답) => {
//     const isExist = await db.collection("chat").findOne({
//       member: [new ObjectId(요청.body.loginId), new ObjectId(요청.body._id)],
//     });
  
//     if (isExist) {
//       // 채팅방이 이미 존재하면
  
//       const existingChatRoomId = { insertedId: `${isExist._id}` };
//       응답.json(existingChatRoomId);
//     } else {
//       // 채팅방이 존재하지 않으면
  
//       const insertedChatRoom = await db.collection("chat").insertOne({
//         // 다큐먼트 삽입시 리턴값이 있음 console.log(insertedChatRoom) 해보면 앎
//         member: [new ObjectId(요청.body.loginId), new ObjectId(요청.body._id)],
//         writerProfileImg: 요청.body.image,
//         writerUsername: 요청.body.username,
//         date: new Date(),
//       });
  
//       응답.json(insertedChatRoom);
//     }
  
//     // 이거 안쓰면 프론트 단에서 then 내부코드가 실행되지 않던데 ..!
//   });
  
//   app.get("/chat", async (요청, 응답) => {
//     // 채팅 리스트 페이지 마운트시
//     // /chat 에 접속시 로그인된 계정과 채팅중인 채팅리스트 데이터 보내는 api
//     console.log(요청.query);
  
//     const result = await db
//       .collection("chat")
//       .find({ member: new ObjectId(요청.query.loginId) })
//       .toArray();
  
//     응답.json(result);
//   });
  
//   app.get("/chat/:chatRoomId/:loginId/:writerId", async (요청, 응답) => {
//     // 1:1 방 접속시(마운트시)
//     const chatRoomDocument = await db
//       .collection("chat")
//       .find({ _id: new ObjectId(요청.params.chatRoomId) })
//       .toArray();
  
//     const nowLoginId = chatRoomDocument[0].member[0];
//     const nowWriterId = chatRoomDocument[0].member[1];
  
//     const chatData = chatRoomDocument[0].chatData;
//     let result;
  
//     if (
//       chatRoomDocument[0].member[0] === nowLoginId &&
//       chatRoomDocument[0].member[1] === nowWriterId
//     ) {
//       result = { canJoin: true, chatData: chatData } 
//     } else {
//       result = { canJoin: false, chatData: null }
//     }
  
//     console.log(result);
//     // console.log(chatRoomDocument[0].member);
//     // console.log(nowLoginId, nowWriterId);
  
//     응답.json(result);
//   });
  
//   io.on("connection", (socket) => {
//     // 어떤 유저가 웹소켓에 연결할 때마다 아래 코드 실행
  
//     socket.on("clientMsg", async ({ msg, roomId, from, to, whenSend }) => {
  
//       console.log(
//         "clientMsg:",
//         msg,
//         "// roomId:",
//         roomId,
//         "// whoSend:",
//         from,
//         "// from:",
//         whenSend
//       );
  
//       let result = await db.collection("chat").updateOne(
//         { _id: new ObjectId(roomId) },
//         {
//           $push: {
//             chatData: {
//               from: from,
//               to: to,
//               msg: msg,
//               whenSend: whenSend,
//             },
//           },
//         }
//       );
//       // console.log(result)
  
//       io.to(roomId).emit("serverMsg", {
//         from: from,
//         msg: msg,
//         whenSend: whenSend,
//       });
//     });
  
//     socket.on("ask-join", (roomId) => {
//       socket.join(roomId);
//     });
//   });