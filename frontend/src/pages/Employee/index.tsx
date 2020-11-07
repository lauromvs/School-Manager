import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import StudentItem from '../../components/StudentItem';
import EmployeeItem from '../../components/EmployeeItem';
import SubjectItem from '../../components/SubjectItem';

import { ButtonContainer, TableHead, TableContainer } from './styles';
import api from '../../services/api';

interface StudentData {
  id: string;
  name: string;
  course: string;
  email: string;
  date_birth: Date;
}
interface EmployeeData {
  id: string;
  name: string;
  position: string;
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

const Employee: React.FC = () => {
  const [students, setStudents] = useState<StudentData[] | null>(null);
  const [employees, setEmployees] = useState<EmployeeData[] | null>(null);
  const [subjects, setSubjects] = useState<SubjectData[] | null>(null);

  useEffect(() => {
    api.get('students').then(response => {
      setStudents(response.data);
    });
    api.get('employees').then(response => {
      setEmployees(response.data);
    });
    api.get('subjects').then(response => {
      setSubjects(response.data);
    });
  }, []);

  return (
    <>
      <Header name="Funcionário" />
      <ButtonContainer>
        <Link to="/enrollStudent">
          <button type="button">Matricular alunos</button>
        </Link>
        <button type="button">Gerar relatórios</button>
      </ButtonContainer>

      <TableContainer>
        <TableHead>
          <h1>Alunos</h1>
          <Link to="/addStudent">Adicionar</Link>
        </TableHead>
        <table>
          <tbody>
            {students &&
              students.map(student => (
                <StudentItem key={student.id} data={student} />
              ))}
          </tbody>
        </table>
        <div>
          <button type="button">{'<'}</button>
          <button type="button">{'>'}</button>
        </div>
      </TableContainer>

      <TableContainer>
        <TableHead>
          <h1>Funcionários</h1>
          <Link to="/addEmployee">Adicionar</Link>
        </TableHead>
        <table>
          <tbody>
            {employees &&
              employees.map(employee => (
                <EmployeeItem key={employee.id} data={employee} />
              ))}
          </tbody>
        </table>
        <div>
          <button type="button">{'<'}</button>
          <button type="button">{'>'}</button>
        </div>
      </TableContainer>

      <TableContainer>
        <TableHead>
          <h1>Disciplinas</h1>
          <Link to="/addSubject">Adicionar</Link>
        </TableHead>
        <table>
          <tbody>
            {subjects &&
              subjects.map(subject => (
                <SubjectItem
                  key={subject.id}
                  data={subject}
                  isProfessor={false}
                />
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

export default Employee;
