import { Container, PostContainer, Title } from './styles';

export const PostsList = () => {
  return (
    <Container>
      {Array.from({ length: 6 }).map((_, index) => (
        <PostContainer key={index}>
          <Title>
            <h1>JavaScript data types and data structures</h1>
            <span>1 day ago</span>
          </Title>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </p>
        </PostContainer>
      ))}
    </Container>
  );
};
