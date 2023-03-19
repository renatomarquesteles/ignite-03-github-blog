import styled from 'styled-components';

export const Container = styled.div``;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      border-color: ${(props) => props.theme.blue};
    }
  }
`;

export const Title = styled.div`
  margin-top: 0.5rem;
  padding: 0.75rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    color: ${(props) => props.theme['base-span']};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;
