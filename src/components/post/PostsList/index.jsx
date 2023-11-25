import { PostItem } from 'components';
import * as S from './style';

const PostsList = ({postsList}) => {

  return (
    <S.PostsContainer>
      <S.PostWrapper>
        {postsList.map((post) => (
          <PostItem key={post.id} post={post}/>
        ))}
      </S.PostWrapper>
    </S.PostsContainer>
  );
};

export default PostsList;
