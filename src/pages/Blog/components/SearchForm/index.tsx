import { Container, PostsCountWrapper } from './styles';

export const SearchForm = () => {
  return (
    <Container>
      <PostsCountWrapper>
        <h2>Posts</h2>
        <span>6 posts</span>
      </PostsCountWrapper>

      <input type="text" placeholder="Search content" />
    </Container>
  );
};
