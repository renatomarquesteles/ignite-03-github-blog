import { useEffect, useState } from 'react';

import { Container, PostsCountWrapper } from './styles';

interface SearchFormProps {
  filterPosts: (query: string) => void;
}

const SearchFormComponent = ({ filterPosts }: SearchFormProps) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    filterPosts(searchText);
  }, [filterPosts, searchText]);

  return (
    <Container>
      <PostsCountWrapper>
        <h2>Posts</h2>
        <span>6 posts</span>
      </PostsCountWrapper>

      <input
        type="text"
        placeholder="Search content"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </Container>
  );
};

export const SearchForm = SearchFormComponent;
