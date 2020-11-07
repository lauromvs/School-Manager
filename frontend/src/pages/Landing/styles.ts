import styled from 'styled-components';

export const Banner = styled.div`
  background: #00b8ae;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
  height: 70vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  height: 30vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;

  .textBlock {
    margin-right: auto;
  }
  .buttonBlock {
    display: flex;
    justify-content: flex-end;
  }

  .button {
    display: flex;
    margin-left: 20px;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-family: Archivo;
    font-weight: bold;
    height: 70px;
    width: 180px;
    color: #fff;
    background: #fea128;
    border: 0;
    border-radius: 15px;
    text-decoration: none;
    &:last-child {
      background: #00b8ae;
    }
  }

  h2 {
    font-size: 24px;
    font-family: Poppins;
    font-weight: normal;
    line-height: 32px;
    color: #fea128;
    & + h2 {
      font-weight: bold;
    }
  }
`;
