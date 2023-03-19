import styled from 'styled-components';

export const Container = styled.form`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;

export const PostsCountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`;
