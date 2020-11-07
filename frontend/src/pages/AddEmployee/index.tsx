import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import api from '../../services/api';

import { InfoContainer, InputBox } from './styles';

const AddStudent: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date_birth, setDateBirth] = useState('');
  const [position, setPosition] = useState('');
  const [cnh, setCnh] = useState('');
  const [isProfessor, setIsProfessor] = useState('0');
  const history = useHistory();

  async function handleCreateEmployee(e: FormEvent): Promise<void> {
    e.preventDefault();
    const employee = {
      name,
      email,
      date_birth,
      position,
      cnh,
      isProfessor: parseInt(isProfessor, 10),
      registration_date: new Date().toISOString(),
    };

    await api.post('employees', employee);
    history.push('/employee');
  }

  return (
    <>
      <Header name="Funcionário" />
      <InfoContainer onSubmit={handleCreateEmployee}>
        <h1>Adicionar novo funcionário</h1>
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
          <label htmlFor="chn">
            CNH
            <input
              id="chn"
              type="text"
              onChange={e => {
                setCnh(e.target.value);
              }}
            />
          </label>
        </InputBox>
        <InputBox>
          <label htmlFor="position">
            Cargo
            <input
              id="position"
              type="text"
              onChange={e => {
                setPosition(e.target.value);
              }}
            />
          </label>
        </InputBox>
        <InputBox>
          <label htmlFor="isProfessor">
            É Professor
            <select
              name="isProfessor"
              id="isProfessor"
              onChange={e => {
                setIsProfessor(e.target.value);
              }}
            >
              <option value="0">não</option>
              <option value="1">sim</option>
            </select>
          </label>
        </InputBox>
        <footer>
          <div>
            <strong>Importante!</strong>
            <p>Preencha todos os dados corretamente.</p>
          </div>
          <div>
            <Link to="/employee">
              <button type="button">Cancelar</button>
            </Link>
            <button type="submit">Salvar Cadastro</button>
          </div>
        </footer>
      </InfoContainer>
    </>
  );
};

export default AddStudent;
