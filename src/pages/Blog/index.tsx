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

  const fetchPosts = async (query: string) => {
    const {
      data: { items },
    } = await api.get('/search/issues', {
      params: {
        q: `repo:${GITHUB_USER}/${REPOSITORY} is:issue ${query}`,
      },
    });

    const formattedPosts = items.map((post: any) => {
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
    fetchPosts(debouncedSearch);
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
