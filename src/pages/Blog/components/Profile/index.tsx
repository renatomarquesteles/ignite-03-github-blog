import { useEffect, useState } from 'react';

import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { HeaderCard } from '../../../../components/HeaderCard';
import { api } from '../../../../lib/axios';

import { Bio, Content, ImageWrapper, Tags } from './styles';

interface User {
  avatarUrl: string;
  name: string;
  htmlUrl: string;
  bio?: string;
  login: string;
  company?: string;
  followers: number;
}

export const Profile = () => {
  const [user, setUser] = useState<User | null>(null);

  const fetchProfile = async () => {
    const { data } = await api.get('/users/renatomarquesteles');

    setUser({
      avatarUrl: data.avatar_url,
      name: data.name,
      htmlUrl: data.html_url,
      bio: data.bio,
      login: data.login,
      company: data.company,
      followers: data.followers,
    });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) return null;

  return (
    <HeaderCard>
      <ImageWrapper>
        <img src={user.avatarUrl} alt="" />

        <Content>
          <header>
            <h1>{user.name}</h1>
            <Link to={user.htmlUrl} target="_blank" rel="noreferrer">
              GITHUB <FaExternalLinkAlt size={12} />
            </Link>
          </header>

          <Bio>{user.bio} </Bio>

          <Tags>
            <span>
              <FaGithub size={18} /> {user.login}
            </span>
            {user.company && (
              <span>
                <FaBuilding size={18} /> {user.company}
              </span>
            )}
            <span>
              <FaUserFriends size={18} /> {user.followers} followers
            </span>
          </Tags>
        </Content>
      </ImageWrapper>
    </HeaderCard>
  );
};
