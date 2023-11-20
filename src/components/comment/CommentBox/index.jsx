import { setTime } from 'utils/setTime';
import * as S from './style';

function CommentList({ comments }) {
  const onErrorImg = (e) => {
    e.target.src = 'https://api.mandarin.weniv.co.kr/1671431659709.png';
  };

  return (
    <S.CommentListWrapper>
      <S.CommentListContainer>
        {comments &&
          comments.map((data) => {
            return (
              <S.CommentListLi key={data.id}>
                <S.CommentAuthor>
                  <S.ProfileImg src={data.author.image} onError={onErrorImg} />
                  <S.InformationBox>
                    <span>{data.author.username}</span>
                    <small>{setTime(data.createdAt)}</small>
                  </S.InformationBox>
                </S.CommentAuthor>
                <S.RightIcon />
                <S.CommentTextBox>
                  <S.CommentText>{data.content}</S.CommentText>
                </S.CommentTextBox>
              </S.CommentListLi>
            );
          })}
      </S.CommentListContainer>
    </S.CommentListWrapper>
  );
}

export default CommentList;
