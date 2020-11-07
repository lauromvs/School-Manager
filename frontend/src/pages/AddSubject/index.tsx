import React, { FormEvent, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import api from '../../services/api';

import { InfoContainer, InputBox } from './styles';

interface EmployeeData {
  id: string;
  name: string;
  position: string;
  email: string;
  date_birth: Date;
  isProfessor: 0 | 1;
}

const AddStudent: React.FC = () => {
  const [name, setName] = useState('');
  const [id_employee, setIdEmployee] = useState('');
  const [course, setCourse] = useState('');
  const [professors, setProfessors] = useState<EmployeeData[] | null>(null);
  const history = useHistory();

  useEffect(() => {
    api.get('employees/professors').then(response => {
      setProfessors(response.data);
    });
  }, []);

  async function handleCreateSubject(e: FormEvent): Promise<boolean> {
    e.preventDefault();
    if (!id_employee || !name || !course) {
      alert('Preencha todos os campos.');
      return false;
    }
    const subject = {
      name,
      id_employee,
      course,
      registration_date: new Date().toISOString(),
    };
    await api.post('subjects', subject);
    history.push('/employee');
    return true;
  }

  return (
    <>
      <Header name="Funcionário" />
      <InfoContainer onSubmit={handleCreateSubject}>
        <h1>Adicionar nova disciplina</h1>

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
          <label htmlFor="course">
            Curso vinculado
            <select
              name="course"
              id="course"
              value={course}
              onChange={e => {
                setCourse(e.target.value);
              }}
            >
              <option value="" disabled>
                Escolha um curso
              </option>
              <option value="ADS">ADS</option>
              <option value="Ciência da Computação">
                Ciência da Computação
              </option>
            </select>
          </label>
        </InputBox>

        <InputBox>
          <label htmlFor="id_employee">
            Professor regente
            <select
              name="id_employee"
              id="id_employee"
              value={id_employee}
              onChange={e => {
                setIdEmployee(e.target.value);
              }}
            >
              <option value="" disabled>
                Escolha um professor
              </option>
              {professors &&
                professors.map(professor => (
                  <option key={professor.id} value={professor.id}>
                    {professor.name}
                  </option>
                ))}
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
