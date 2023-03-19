import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa';

import { HeaderCard } from '../../../../components/HeaderCard';

import { Bio, Content, ImageWrapper, Tags } from './styles';

export const Profile = () => {
  return (
    <HeaderCard>
      <ImageWrapper>
        <img src="https://github.com/renatomarquesteles.png" alt="" />
        <Content>
          <header>
            <h1>Renato Marques Teles</h1>
            <a href="#">
              GITHUB <FaExternalLinkAlt size={12} />
            </a>
          </header>
          <Bio>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            aliquam autem consequatur fugit omnis repellat, debitis sit
            asperiores voluptate velit qui, deleniti, provident ad itaque. Quod
            saepe suscipit delectus blanditiis!
          </Bio>
          <Tags>
            <span>
              <FaGithub size={18} /> renatomarxs
            </span>
            <span>
              <FaBuilding size={18} /> Rocketseat
            </span>
            <span>
              <FaUserFriends size={18} /> 32 followers
            </span>
          </Tags>
        </Content>
      </ImageWrapper>
    </HeaderCard>
  );
};
