import { useCallback, useEffect, useState } from 'react';

import dayjs from 'dayjs';
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';

import { HeaderCard } from '../../components/HeaderCard';
import { api } from '../../lib/axios';

import { Container, Options, Tags, Title } from './styles';

interface IPost {
  title: string;
  body: string;
  htmlUrl: string;
  author: string;
  comments: number;
  createdAt: Date;
}

export const Post = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = useParams();

  const fetchPost = useCallback(async () => {
    const { data } = await api.get(
      `/repos/renatomarquesteles/ignite-03-github-blog/issues/${id}`
    );

    setPost({
      title: data.title,
      body: data.body,
      htmlUrl: data.html_url,
      author: data.user.login,
      comments: data.comments,
      createdAt: new Date(data.created_at),
    });
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (!post) return null;

  return (
    <Container>
      <HeaderCard>
        <Options>
          <Link to="/">
            <FaChevronLeft size={12} />
            VOLTAR
          </Link>
          <Link to={post.htmlUrl} target="_blank" rel="noreferrer">
            SEE ON GITHUB <FaExternalLinkAlt size={12} />
          </Link>
        </Options>

        <Title>{post.title}</Title>

        <Tags>
          <span>
            <FaGithub size={18} />
            {post.author}
          </span>
          <span>
            <FaCalendarDay size={18} />
            {dayjs(post.createdAt).fromNow()}
          </span>
          <span>
            <FaComment size={18} />
            {post.comments} comments
          </span>
        </Tags>
      </HeaderCard>

      <main>
        <ReactMarkdown className="line-break">{post.body}</ReactMarkdown>
      </main>
    </Container>
  );
};
