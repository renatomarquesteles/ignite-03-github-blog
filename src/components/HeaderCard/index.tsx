import { ReactNode } from 'react';

import { Container } from './styles';

interface HeaderCardProps {
  children: ReactNode;
}

export const HeaderCard = ({ children }: HeaderCardProps) => {
  return <Container>{children}</Container>;
};
