import styled from 'styled-components';

export const TableRow = styled.tr`
  margin: 15px 0;

  td,
  th {
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
  }
`;
