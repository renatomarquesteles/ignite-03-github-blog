import { useParams } from 'react-router-dom';

export const Post = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Post</h1>
    </div>
  );
};
