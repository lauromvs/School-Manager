import React from 'react';

import { TableRow } from './styles';

interface ISubjectProfessors {
  id: string;
  name: string;
  employee: {
    name: string;
  };
}

interface ProfessorItemProps {
  data: ISubjectProfessors[];
  order: string;
}

function orderTable(
  subjectProfessors: ISubjectProfessors[],
  order: string,
): any {
  let orderedSubs: ISubjectProfessors[] = [];

  if (order === '1') {
    orderedSubs = subjectProfessors.sort((a, b) => {
      if (a.employee.name < b.employee.name) return -1;
      if (a.employee.name > b.employee.name) return 1;
      return 0;
    });
    console.log(orderedSubs);
  } else {
    orderedSubs = subjectProfessors.sort((a, b) => {
      if (a.employee.name < b.employee.name) return 1;
      if (a.employee.name > b.employee.name) return -1;
      return 0;
    });
    console.log(orderedSubs);
  }

  return (
    <tbody>
      <TableRow>
        <th>PROFESSOR</th>
        <th>MATÉRIA</th>
      </TableRow>
      {orderedSubs.map(subject => (
        <TableRow key={subject.id}>
          <td>{subject.employee.name}</td>
          <td>{subject.name}</td>
        </TableRow>
      ))}
    </tbody>
  );
}

const ProfessorItem: React.FC<ProfessorItemProps> = props => {
  return orderTable(props.data, props.order);
};

export default ProfessorItem;
