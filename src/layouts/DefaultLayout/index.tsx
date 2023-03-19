import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';

import { Content } from './styles';

export const DefaultLayout = () => {
  return (
    <>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </>
  );
};
