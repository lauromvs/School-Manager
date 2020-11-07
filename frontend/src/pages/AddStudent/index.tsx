import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import api from '../../services/api';

import { InfoContainer, InputBox, Footer } from './styles';

const AddStudent: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date_birth, setDateBirth] = useState('');
  const [course, setCourse] = useState('');
  const history = useHistory();

  async function handleCreateStudent(e: FormEvent): Promise<void> {
    e.preventDefault();
    const student = {
      name,
      email,
      date_birth,
      course,
      registration_date: new Date().toISOString(),
    };

    await api.post('students', student);
    history.push('/employee');
  }

  return (
    <>
      <Header name="Funcionário" />
      <InfoContainer onSubmit={handleCreateStudent}>
        <h1>Adicionar novo aluno</h1>
        <InputBox>
          <label htmlFor="name">
            Nome
            <input
              id="name"
              type="text"
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </label>
        </InputBox>
        <InputBox>
          <label htmlFor="email">
            E-mail
            <input
              id="email"
              type="text"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </InputBox>
        <InputBox>
          <label htmlFor="date_birth">
            Data de nascimento
            <input
              id="date_birth"
              type="text"
              onChange={e => {
                setDateBirth(e.target.value);
              }}
            />
          </label>
        </InputBox>
        <InputBox>
          <label htmlFor="course">
            Curso
            <input
              id="course"
              type="text"
              onChange={e => {
                setCourse(e.target.value);
              }}
            />
          </label>
        </InputBox>
      </InfoContainer>
      <Footer>
        <div>
          <strong>Importante!</strong>
          <p>Preencha todos os dados corretamente.</p>
        </div>
        <div>
          <Link to="/employee">
            <button id="btnCancel" type="button">
              Cancelar
            </button>
          </Link>
          <button id="btnSubmit" type="submit">
            Salvar Cadastro
          </button>
        </div>
      </Footer>
    </>
  );
};

export default AddStudent;
