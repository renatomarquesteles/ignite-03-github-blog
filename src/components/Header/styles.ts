import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  overflow: hidden;

  img {
    padding: 1.875rem 0;
  }
`;

export const Logo = styled.img`
  margin: 0px 1rem 6.125rem;
`;

export const CenterLightningEffect = styled.div`
  width: 1024px;
  height: 52px;
  background: #14589c;
  filter: blur(106px);
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
`;
