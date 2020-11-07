import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 110px;
  margin-bottom: 50px;

  button {
    height: 70px;
    width: 180px;
    border-radius: 15px;
    background: #00b8ae;
    color: #fff;
    border: 0;
    margin-right: 35px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 110px;
  padding-bottom: 20px;

  table {
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;

    h1 {
      margin-right: auto;
      font-size: 24px;
      font-family: Poppins;
    }

    button {
      background: #fea128;
      color: #fff;
      height: 25px;
      width: 25px;
      border-radius: 7px;
      border: 0;
      margin: 15px;
    }
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding: 3rem;
  background-color: #fff;
`;

export const InputBox = styled.div`
  color: #9c98a6;
  input {
    padding-left: 20px;
    height: 40px;
    color: #6a6180;
    background: #fafafc;
    border-radius: 8px;
    border: 0;
    width: 100%;
    margin-bottom: 24px;
  }
`;
