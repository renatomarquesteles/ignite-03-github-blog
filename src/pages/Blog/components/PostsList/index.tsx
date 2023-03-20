import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
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

dayjs.extend(relativeTime);

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <Container>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.number}`}>
          <PostContainer>
            <Title>
              <h1>{post.title}</h1>
              <span>{dayjs(post.createdAt).fromNow()}</span>
            </Title>
            <p>{post.body}</p>
          </PostContainer>
        </Link>
      ))}
    </Container>
  );
};
