import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import ProfessorItem from '../../components/ProfessorItem';

import { TableHead, TableContainer } from './styles';
import api from '../../services/api';

interface ISubjectProfessors {
  id: string;
  name: string;
  employee: {
    name: string;
  };
}

const ProfessorList: React.FC = () => {
  const [subjectProfessors, setSubjectProfessors] = useState<
    ISubjectProfessors[]
  >([]);
  const [orderFilter, setOrderFilter] = useState('1');

  useEffect(() => {
    api.get('/subjects').then(response => {
      setSubjectProfessors(response.data);
    });
  }, []);

  return (
    <>
      <Header name="Funcionário" />

      <TableContainer>
        <TableHead>
          <h1>Professores</h1>
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
          {subjectProfessors && (
            <ProfessorItem data={subjectProfessors} order={orderFilter} />
          )}
        </table>
      </TableContainer>
    </>
  );
};

export default ProfessorList;
