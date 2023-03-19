import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  a {
    display: flex;
    text-decoration: none;
  }

  @media (max-width: 54rem) {
    grid-template-columns: 1fr;
  }
`;

export const PostContainer = styled.div`
  max-height: 25rem;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 160%;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 160%;
  }

  span {
    white-space: nowrap;
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`;
