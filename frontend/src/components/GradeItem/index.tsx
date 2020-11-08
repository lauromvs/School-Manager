import React from 'react';

import { TableRow } from './styles';

interface IGrades {
  id: string;
  average: string;
  frequency: number;
  quantity_given_classes: number;
  status: string;
  n1: string;
  n2: string;
  student: {
    name: string;
  };
  subject: {
    name: string;
  };
}

interface EvasionItemProps {
  data: IGrades[];
  order: string;
}

function orderTable(evasions: IGrades[], order: string): any {
  console.log(order);
  let orderedEvasions: IGrades[] = [];

  if (order === '1') {
    orderedEvasions = evasions.sort((a, b) => {
      if (parseFloat(a.average) < parseFloat(b.average)) return -1;
      if (parseFloat(a.average) > parseFloat(b.average)) return 1;
      return 0;
    });
    console.log(orderedEvasions);
  } else {
    orderedEvasions = evasions.sort((a, b) => {
      if (parseFloat(a.average) < parseFloat(b.average)) return 1;
      if (parseFloat(a.average) > parseFloat(b.average)) return -1;
      return 0;
    });
  }

  return (
    <tbody>
      <TableRow>
        <th>ALUNO</th>
        <th>MATÉRIA</th>
        <th>N1</th>
        <th>N2</th>
        <th>MÉDIA</th>
        <th>STATUS</th>
      </TableRow>
      {orderedEvasions.map(evasion => (
        <TableRow key={evasion.id}>
          <td>{evasion.student.name}</td>
          <td>{evasion.subject.name}</td>
          <td>{evasion.n1}</td>
          <td>{evasion.n2}</td>
          <td>{evasion.average}</td>
          <td>{evasion.status}</td>
        </TableRow>
      ))}
    </tbody>
  );
}

const GradeItem: React.FC<EvasionItemProps> = props => {
  return orderTable(props.data, props.order);
};

export default GradeItem;
