import styled from 'styled-components';

export const HeaderDiv = styled.header`
  background: #00b8ae;
  height: 210px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 110px;
  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    img {
      height: 45px;
      margin-top: 30px;
    }
    p {
      color: #fff;
      font-size: 28px;
      font-family: Archivo;

      & + p {
        color: #fea128;
        font-weight: bold;
      }
    }
  }

  img {
    height: 190px;
  }
`;
