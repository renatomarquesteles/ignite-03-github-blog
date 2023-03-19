import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -88px;
  position: relative;
  z-index: 1;
`;
