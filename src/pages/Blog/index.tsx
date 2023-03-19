import { PostsList } from './components/PostsList';
import { Profile } from './components/Profile';
import { SearchForm } from './components/SearchForm';

import { Content } from './styles';

export const Blog = () => {
  return (
    <Content>
      <Profile />
      <SearchForm />
      <PostsList />
    </Content>
  );
};
