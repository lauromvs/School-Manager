import styled from 'styled-components';

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
    margin-bottom: 20px;
  }
`;

export const InfoContainer = styled.form`
  width: 100%;
  max-width: 80rem;

  border-radius: 8px 8px 0px 0px;
  margin: 3.2rem auto 3.2rem;
  padding: 3rem;
  background-color: #fff;

  h1 {
    margin-bottom: 40px;
    font-family: Poppins;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  width: 100%;
  max-width: 80rem;
  margin: -3.2rem auto 3.2rem;
  padding: 3rem;

  background: #fafafc;
  border-radius: 0px 0px 8px 8px;

  strong {
    color: #fea128;
  }
  p {
    color: #a0a0b3;
  }
  #btnSubmit {
    width: 170px;
    height: 55px;
    border: 0;
    color: #fff;
    margin-left: 25px;
    background: #00b8ae;
    border-radius: 8px;
  }

  #btnCancel {
    width: 170px;
    height: 55px;
    border: 0;
    color: #6a6180;
    margin-left: 25px;
    border: 1px solid #9a9a9a;

    border-radius: 8px;
  }
`;
