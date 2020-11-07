import React from 'react';
import { Link } from 'react-router-dom';
import { Banner, ButtonContainer } from './styles';
import backgroundImg from '../../assets/background.png';
import logoImg from '../../assets/logo.svg';

const Landing: React.FC = () => {
  return (
    <>
      <Banner>
        <img src={logoImg} alt="School Manager" />
        <img src={backgroundImg} alt="Imagem do baner" />
      </Banner>

      <ButtonContainer>
        <div className="textBlock">
          <h2>Seja bem-vindo.</h2>
          <h2>Escolha uma opção</h2>
        </div>
        <div className="buttonBlock">
          <Link className="button" to="/employee">
            Funcionário
          </Link>
          <Link className="button" to="/professor">
            Professor
          </Link>
          <Link className="button" to="/student">
            Estudante
          </Link>
        </div>
      </ButtonContainer>
    </>
  );
};

export default Landing;
