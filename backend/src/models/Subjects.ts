import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Employee from './Employees';

@Entity('subjects')
class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_employee: string;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'id_employee' })
  employee: Employee;

  @Column()
  name: string;

  @Column()
  course: string;
}

export default Subject;
