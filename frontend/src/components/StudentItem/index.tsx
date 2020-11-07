import React from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import api from '../../services/api';

import { TableRow } from './styles';

interface StudentData {
  id: string;
  name: string;
  course: string;
  email: string;
  date_birth: Date;
}

interface StudentItemProps {
  data: StudentData;
}

function handleDeleteStudent(id: string, name: string): void {
  const result = window.confirm(`Deseja deletar "${name}"`);
  if (result) {
    api.delete(`students/${id}`).then(response => {
      window.location.reload(false);
    });
  }
}
const StudentItem: React.FC<StudentItemProps> = props => {
  const { id, name, course, email, date_birth } = props.data;

  return (
    <TableRow>
      <td>{name}</td>
      <td>{course}</td>
      <td>{email}</td>
      <td>{date_birth}</td>
      <td>
        <button type="button">
          <FiEdit size={26} color="#FEA128" />
        </button>
        <button type="button" onClick={() => handleDeleteStudent(id, name)}>
          <FiTrash2 size={26} color="#FEA128" />
        </button>
      </td>
    </TableRow>
  );
};

export default StudentItem;
