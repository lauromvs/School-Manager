import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import GradeItem from '../../components/GradeItem';

import { TableHead, TableContainer } from './styles';
import api from '../../services/api';

interface IGrades {
  id: string;
  average: string;
  frequency: number;
  quantity_given_classes: number;
  status: string;
  n1: string;
  n2: string;
  student: {
    name: string;
  };
  subject: {
    name: string;
  };
}

const Grades: React.FC = () => {
  const [evasions, setEvasions] = useState<IGrades[]>([]);
  const [orderFilter, setOrderFilter] = useState('0');

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
            <option value="0">Decrescente</option>
            <option value="1">Crescente</option>
          </select>
        </TableHead>
        <table>
          {evasions && <GradeItem data={evasions} order={orderFilter} />}
        </table>
      </TableContainer>
    </>
  );
};

export default Grades;
