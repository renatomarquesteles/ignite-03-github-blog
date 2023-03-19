import styled from 'styled-components';

export const ImageWrapper = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  gap: 0.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 130%;
    }

    a {
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      font-weight: 700;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const Bio = styled.p`
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    color: ${(props) => props.theme['base-text']};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;
