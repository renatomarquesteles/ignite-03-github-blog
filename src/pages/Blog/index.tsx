import { Header } from '../../components/Header';
import { Profile } from './components/Profile';
import { SearchForm } from './components/SearchForm';

import { Content } from './styles';

export const Blog = () => {
  return (
    <>
      <Header />
      <Content>
        <Profile />
        <SearchForm />
      </Content>
    </>
  );
};