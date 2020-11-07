import React from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import api from '../../services/api';

import { TableRow } from './styles';

interface EmployeeData {
  id: string;
  name: string;
  position: string;
  email: string;
  date_birth: Date;
}

interface EmployeeItemProps {
  data: EmployeeData;
}

function handleDeleteEmployee(id: string, name: string): void {
  const result = window.confirm(`Deseja deletar "${name}"`);
  if (result) {
    api.delete(`employees/${id}`).then(response => {
      window.location.reload(false);
    });
  }
}

const EmployeeItem: React.FC<EmployeeItemProps> = props => {
  const { id, name, position, email, date_birth } = props.data;
  return (
    <TableRow>
      <td>{name}</td>
      <td>{position}</td>
      <td>{email}</td>
      <td>{date_birth}</td>
      <td>
        <button type="button">
          <FiEdit size={24} color="#FEA128" />
        </button>
        <button type="button" onClick={() => handleDeleteEmployee(id, name)}>
          <FiTrash2 size={24} color="#FEA128" />
        </button>
      </td>
    </TableRow>
  );
};

export default EmployeeItem;
