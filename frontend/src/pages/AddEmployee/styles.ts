import styled from 'styled-components';

export const InputBox = styled.div`
  color: #9c98a6;
  input {
    padding-left: 20px;
    height: 40px;
    color: #6a6180;
    border-radius: 8px;
    border: 0;
    width: 100%;
    margin-bottom: 10px;
  }
  select {
    padding-left: 20px;
    height: 40px;
    color: #6a6180;
    border-radius: 8px;
    border: 0;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const InfoContainer = styled.form`
  padding: 50px 110px;
  padding-bottom: 55px;

  h1 {
    margin-bottom: 40px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
  }

  footer {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    strong {
      color: #fea128;
    }
    p {
      color: #a0a0b3;
    }
    button {
      width: 200px;
      height: 55px;
      border: 0;
      color: #fff;
      margin-left: 25px;

      background: #00b8ae;
      border-radius: 8px;
    }
  }
`;
