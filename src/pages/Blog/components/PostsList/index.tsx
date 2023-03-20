import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

import { Container, PostContainer, Title } from './styles';

interface Post {
  id: number;
  number: number;
  title: string;
  body: string;
  createdAt: Date;
}

interface PostsListProps {
  posts: Post[];
}

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <Container>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.number}`}>
          <PostContainer>
            <Title>
              <h1>{post.title}</h1>
              <span>
                {formatDistanceToNow(post.createdAt, { addSuffix: true })}
              </span>
            </Title>
            <p>{post.body}</p>
          </PostContainer>
        </Link>
      ))}
    </Container>
  );
};
