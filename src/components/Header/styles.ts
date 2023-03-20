import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  overflow: hidden;

  img {
    padding: 1.875rem 0;
  }

  @media (max-width: 60rem) {
    justify-content: center;

    img:nth-child(odd) {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  margin: 0px 1rem 6.125rem;
`;

export const CenterLightningEffect = styled.div`
  width: 64rem;
  height: 3.25rem;
  background: #14589c;
  filter: blur(6.625rem);
  position: absolute;
  bottom: 1.375rem;
  left: 50%;
  transform: translateX(-50%);
`;
