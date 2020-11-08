import React from 'react';

import { TableRow } from './styles';

interface IEvasion {
  id: string;
  average: string;
  frequency: number;
  quantity_given_classes: number;
  status: string;
  student: {
    name: string;
  };
  subject: {
    name: string;
  };
}

interface EvasionItemProps {
  data: IEvasion[];
  order: string;
}

function orderTable(evasions: IEvasion[], order: string): any {
  console.log(order);
  let orderedEvasions: IEvasion[] = [];

  if (order === '1') {
    orderedEvasions = evasions.sort((a, b) => {
      if (a.frequency < b.frequency) return -1;
      if (a.frequency > b.frequency) return 1;
      return 0;
    });
    console.log(orderedEvasions);
  } else {
    orderedEvasions = evasions.sort((a, b) => {
      if (a.frequency < b.frequency) return 1;
      if (a.frequency > b.frequency) return -1;
      return 0;
    });
    console.log(orderedEvasions);
  }

  return (
    <tbody>
      {orderedEvasions.map(evasion => (
        <TableRow key={evasion.id}>
          <td>{evasion.student.name}</td>
          <td>{evasion.subject.name}</td>
          <td>{evasion.frequency}</td>
          <td>{evasion.quantity_given_classes}</td>
          <td>{evasion.status}</td>
        </TableRow>
      ))}
    </tbody>
  );
}

const EvasionItem: React.FC<EvasionItemProps> = props => {
  return orderTable(props.data, props.order);
};

export default EvasionItem;
