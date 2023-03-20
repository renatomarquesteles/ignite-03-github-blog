import { useCallback, useEffect, useState } from 'react';

import { api } from '../../lib/axios';
import { PostsList } from './components/PostsList';
import { Profile } from './components/Profile';
import { SearchForm } from './components/SearchForm';

import { Content } from './styles';

interface Post {
  id: number;
  number: number;
  title: string;
  body: string;
  createdAt: Date;
}

export const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const { data } = await api.get(
      '/repos/renatomarquesteles/ignite-03-github-blog/issues'
    );

    const formattedPosts = data.map((post: any) => {
      return {
        id: post.id,
        number: post.number,
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

  const filterPosts = useCallback(
    (query: string) => {
      const formattedQuery = query.toLowerCase();

      setFilteredPosts(
        posts.filter((post) => {
          const formattedTitle = post.title.toLowerCase();

          return formattedTitle.includes(formattedQuery);
        })
      );
    },
    [posts]
  );

  return (
    <Content>
      <Profile />
      <SearchForm filterPosts={filterPosts} />
      <PostsList posts={filteredPosts} />
    </Content>
  );
};
