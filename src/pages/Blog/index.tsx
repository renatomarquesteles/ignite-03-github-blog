import { useEffect, useState } from 'react';

import useDebounce from '../../hooks/useDebounce';
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

const GITHUB_USER = 'renatomarquesteles';
const REPOSITORY = 'ignite-03-github-blog';

export const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchText, setSearchText] = useState('');

  const debouncedSearch = useDebounce(searchText, 500);

  const fetchPosts = async (query: string, signal: AbortSignal) => {
    try {
      const { data } = await api.get('/search/issues', {
        params: {
          q: `repo:${GITHUB_USER}/${REPOSITORY} is:issue ${query}`,
        },
        signal,
      });

      const formattedPosts = data.items.map((post: any) => {
        return {
          id: post.id,
          number: post.number,
          title: post.title,
          body: post.body,
          createdAt: new Date(post.created_at),
        };
      });

      setPosts(formattedPosts);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchPosts(debouncedSearch, controller.signal);

    return () => {
      controller.abort();
    };
  }, [debouncedSearch]);

  const changeSearchText = (text: string) => {
    setSearchText(text);
  };

  return (
    <Content>
      <Profile />
      <SearchForm changeSearchText={changeSearchText} searchText={searchText} />
      <PostsList posts={posts} />
    </Content>
  );
};
