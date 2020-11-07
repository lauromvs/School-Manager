import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImg from '../../assets/background.png';
import logoImg from '../../assets/logo.svg';

import { HeaderDiv } from './styles';

interface HeaderProps {
  name: string;
}
const Header: React.FC<HeaderProps> = props => {
  return (
    <HeaderDiv>
      <div>
        <Link to="/">
          <img src={logoImg} alt="School Manager" />
        </Link>
        <div>
          <p>Bem-vindo,</p>
          <p>{props.name}</p>
        </div>
      </div>
      <img src={backgroundImg} alt="Imagem do baner" />
    </HeaderDiv>
  );
};

export default Header;
