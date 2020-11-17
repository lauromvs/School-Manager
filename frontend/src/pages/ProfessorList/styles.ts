import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 110px;

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

export const TableHead = styled.div`
  align-items: center;
  padding-bottom: 20px;
  a {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    height: 40px;
    width: 105px;
    background: #fea128;
    color: #fff;
    border: 0;
    border-radius: 10px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 110px;
  padding-bottom: 20px;

  table {
    table-layout: auto;
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;

    h1 {
      margin-right: auto;
      font-size: 24px;
      font-family: Poppins;
      font-weight: 500;
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
