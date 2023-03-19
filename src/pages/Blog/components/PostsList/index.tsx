import { useEffect, useState } from 'react';

import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { api } from '../../../../lib/axios';

import { Container, PostContainer, Title } from './styles';

interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

dayjs.extend(relativeTime);

export const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const { data } = await api.get(
      '/repos/renatomarquesteles/ignite-03-github-blog/issues'
    );

    const formattedPosts = data.map((post: any) => {
      return {
        id: post.id,
        title: post.title,
        body: post.body,
        createdAt: new Date(post.created_at),
      };
    });

    setPosts(formattedPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      {posts.map((post) => (
        <PostContainer key={post.id}>
          <Title>
            <h1>{post.title}</h1>
            <span>{dayjs(post.createdAt).fromNow()}</span>
          </Title>
          <p>{post.body}</p>
        </PostContainer>
      ))}
    </Container>
  );
};
