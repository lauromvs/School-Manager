import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import StudentItem from '../../components/StudentItem';
import SubjectItem from '../../components/SubjectItem';

import { ButtonContainer, TableHead, TableContainer } from './styles';
import api from '../../services/api';

interface SubjectData {
  id: string;
  name: string;
  course: string;
  id_employee: string;
  professor: string;
}

const Professor: React.FC = () => {
  // Pegar da autenticação
  const id_employee = '1839db95-cd6f-4a3a-95cf-0e324a5b87a9';
  const authProf = 'Alan Turing';
  const [teachingSubjects, setTeachingSubjects] = useState<
    SubjectData[] | null
  >(null);

  useEffect(() => {
    api.get(`subjects/professor/${id_employee}`).then(response => {
      setTeachingSubjects(response.data);
    });
  }, []);

  return (
    <>
      <Header name={authProf} />
      <ButtonContainer>
        <button type="button">Gerar relatórios</button>
      </ButtonContainer>

      <TableContainer>
        <TableHead>
          <h1>Disciplinas ministradas</h1>
        </TableHead>
        <table>
          <tbody>
            {teachingSubjects &&
              teachingSubjects.map(subject => (
                <SubjectItem key={subject.id} data={subject} isProfessor />
              ))}
          </tbody>
        </table>
        <div>
          <button type="button">{'<'}</button>
          <button type="button">{'>'}</button>
        </div>
      </TableContainer>
    </>
  );
};

export default Professor;
