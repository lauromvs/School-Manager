import React, { FormEvent, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import api from '../../services/api';
import { InfoContainer, InputBox } from './styles';

interface StudentData {
  id: string;
  name: string;
  course: string;
  email: string;
  date_birth: Date;
}
interface SubjectData {
  id: string;
  name: string;
  course: string;
  id_employee: string;
  professor: string;
}
const EnrollStudent: React.FC = () => {
  const [students, setStudents] = useState<StudentData[] | null>(null);
  const [subjects, setSubjects] = useState<SubjectData[] | null>(null);
  const [id_student, setIdStudent] = useState('');
  const [id_subject, setIdSubject] = useState('');
  const history = useHistory();

  useEffect(() => {
    api.get('students').then(response => {
      setStudents(response.data);
      // console.log(response.data);
    });
    api.get('subjects').then(response => {
      setSubjects(response.data);
      // console.log(response.data);
    });
  }, []);

  async function handleEnrollStudent(e: FormEvent): Promise<boolean> {
    e.preventDefault();
    if (!id_student || !id_subject) {
      alert('Preencha todos os campos.');
      return false;
    }

    const studentSubject = {
      id_student,
      id_subject,
    };

    await api.post('studentsSubjects', studentSubject);
    history.goBack();
    // console.log(studentSubject);

    return true;
  }

  return (
    <>
      <Header name="Funcionário" />

      <InfoContainer onSubmit={handleEnrollStudent}>
        <h1>Matricular aluno</h1>

        <InputBox>
          <label htmlFor="id_student">
            Aluno
            <select
              name="id_student"
              id="id_student"
              value={id_student}
              onChange={e => {
                setIdStudent(e.target.value);
              }}
            >
              <option value="" disabled>
                Escolha um aluno
              </option>
              {students &&
                students.map(student => (
                  <option key={student.id} value={student.id}>
                    {student.name}
                  </option>
                ))}
            </select>
          </label>
        </InputBox>

        <InputBox>
          <label htmlFor="id_subject">
            Aluno
            <select
              name="id_subject"
              id="id_subject"
              value={id_subject}
              onChange={e => {
                setIdSubject(e.target.value);
              }}
            >
              <option value="" disabled>
                Escolha uma disciplina
              </option>
              {subjects &&
                subjects.map(subject => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name}
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
            <button type="button" onClick={() => history.goBack()}>
              Cancelar
            </button>

            <button type="submit">Matricular</button>
          </div>
        </footer>
      </InfoContainer>
    </>
  );
};
export default EnrollStudent;
