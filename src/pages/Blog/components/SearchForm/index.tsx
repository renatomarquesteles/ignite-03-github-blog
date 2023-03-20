import { Container, PostsCountWrapper } from './styles';

interface SearchFormProps {
  changeSearchText: (query: string) => void;
  searchText: string;
}

const SearchFormComponent = ({
  changeSearchText,
  searchText,
}: SearchFormProps) => {
  return (
    <Container>
      <PostsCountWrapper>
        <h2>Posts</h2>
        <span>6 posts</span>
      </PostsCountWrapper>

      <input
        type="text"
        placeholder="Search content"
        value={searchText}
        onChange={(e) => changeSearchText(e.target.value)}
      />
    </Container>
  );
};

export const SearchForm = SearchFormComponent;
