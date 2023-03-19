import leftEffectImage from '../../assets/effect.png';
import rightEffectImage from '../../assets/effect-1.png';
import logoImage from '../../assets/logo.svg';

import { CenterLightningEffect, Container, Content, Logo } from './styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={leftEffectImage} alt="" />
        <Logo src={logoImage} alt="" />
        <img src={rightEffectImage} alt="" />
        <CenterLightningEffect />
      </Content>
    </Container>
  );
};
