import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';

import api from '../../services/api';
import SubjectItem from '../../components/SubjectItem';
import {
  ButtonContainer,
  TableContainer,
  InputBox,
  InfoContainer,
} from './styles';

interface EnrollData {
  id_student: string;
  id_subject: string;
}
interface SubjectData {
  id: string;
  name: string;
  course: string;
  id_employee: string;
  professor: string;
}
const Student: React.FC = () => {
  // Pegar da autenticação
  const id = 'db65f19f-5b67-4c8a-92a1-ab8026074f8d';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date_birth, setDateBirth] = useState('');
  const [course, setCourse] = useState('');
  const [subjects, setSubjects] = useState<SubjectData[] | null>(null);

  function getSubjects(subject_ids: string[]): void {
    api.post('/subjects/student', subject_ids).then(response => {
      setSubjects(response.data);
    });
  }

  useEffect(() => {
    api.get(`/students/${id}`).then(response => {
      setName(response.data.name);
      setEmail(response.data.email);
      setDateBirth(response.data.date_birth);
      setCourse(response.data.course);
    });
    api.get(`/studentsSubjects/student/${id}`).then(response => {
      const subject_ids = response.data;
      getSubjects(subject_ids);
    });
  }, []);

  return (
    <>
      <Header name="Aluno" />
      <ButtonContainer>
        <button type="button">Notas e frequência</button>
      </ButtonContainer>
      <InfoContainer>
        <InputBox>
          <label htmlFor="name">
            Nome
            <input id="name" type="text" value={name} readOnly />
          </label>
        </InputBox>
        <InputBox>
          <label htmlFor="email">
            E-mail <input id="email" type="text" value={email} readOnly />
          </label>
        </InputBox>
        <InputBox>
          <label htmlFor="date_birth">
            Data de nascimento
            <input id="date_birth" type="text" value={date_birth} readOnly />
          </label>
        </InputBox>
        <InputBox>
          <label htmlFor="course">
            Curso
            <input id="course" type="text" value={course} readOnly />
          </label>
        </InputBox>
        <InputBox>
          <label htmlFor="id">
            Registro do aluno
            <input id="id" type="text" value={id} readOnly />
          </label>
        </InputBox>
      </InfoContainer>
    </>
  );
};

export default Student;
