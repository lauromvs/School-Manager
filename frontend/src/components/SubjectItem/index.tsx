import React, { useState, useEffect } from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import api from '../../services/api';

import { TableRow } from './styles';

interface SubjectData {
  id: string;
  name: string;
  course: string;
  id_employee: string;
  professor: string;
}

interface SubjectItemProps {
  data: SubjectData;
  isProfessor: boolean;
}

function handleDeleteSubject(id: string, name: string): void {
  const result = window.confirm(`Deseja deletar "${name}"`);
  if (result) {
    api.delete(`subjects/${id}`).then(response => {
      window.location.reload(false);
    });
  }
}

const SubjectItem: React.FC<SubjectItemProps> = props => {
  const { id, name, course, id_employee } = props.data;
  const { isProfessor } = props;
  const [professorName, setProfessorName] = useState<string | null>(null);

  useEffect(() => {
    api.get(`employees/${id_employee}`).then(response => {
      setProfessorName(response.data.name);
    });
  }, [id_employee]);

  return (
    <TableRow>
      <td>{name}</td>
      <td>{course}</td>
      {!isProfessor && (
        <>
          <td>{professorName}</td>
          <td>
            <button type="button">
              <FiEdit size={24} color="#FEA128" />
            </button>
            <button type="button" onClick={() => handleDeleteSubject(id, name)}>
              <FiTrash2 size={24} color="#FEA128" />
            </button>
          </td>
        </>
      )}
      {isProfessor && (
        <>
          <td>{id}</td>
          <td>
            <button id="buttonIsProf" type="button">
              <FiEdit size={20} color="#FFF" />
              Notas e frequência
            </button>
          </td>
        </>
      )}
    </TableRow>
  );
};

export default SubjectItem;
