import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import EvasionItem from '../../components/EvasionItem';

import { TableHead, TableContainer } from './styles';
import api from '../../services/api';

interface IEvasion {
  id: string;
  average: string;
  frequency: number;
  quantity_given_classes: number;
  status: string;
  student: {
    name: string;
  };
  subject: {
    name: string;
  };
}

const Employee: React.FC = () => {
  const [evasions, setEvasions] = useState<IEvasion[]>([]);
  const [orderFilter, setOrderFilter] = useState('1');

  useEffect(() => {
    api.get('/studentsSubjects/evasion').then(response => {
      setEvasions(response.data);
    });
  }, []);

  return (
    <>
      <Header name="Professor" />

      <TableContainer>
        <TableHead>
          <h1>Alunos</h1>
          <select
            name="order"
            id="order"
            onChange={e => {
              setOrderFilter(e.target.value);
            }}
          >
            <option value="1">Crescente</option>
            <option value="0">Decrescente</option>
          </select>
        </TableHead>
        <table>
          {evasions && <EvasionItem data={evasions} order={orderFilter} />}
        </table>
      </TableContainer>
    </>
  );
};

export default Employee;
