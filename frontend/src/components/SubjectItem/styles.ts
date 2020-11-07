import styled from 'styled-components';

export const TableRow = styled.tr`
  margin: 15px 0;

  td {
    background: #fff;
    height: 60px;
    text-align: left;
    border-radius: 8px;
    padding-left: 20px;

    &:last-child {
      text-align: center;
    }

    button {
      color: #fff;
      background-color: #fff;
      border: 0;
      margin: 15px;
    }

    #buttonIsProf {
      background-color: #fea128;
      padding: 15px;
      border-radius: 8px;
      color: #fff;
      border: 0;
      margin: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;

      svg {
        margin-right: 10px;
      }
    }
  }
`;
