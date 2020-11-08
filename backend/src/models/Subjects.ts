import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';

import Employee from './Employees';

@Entity('subjects')
class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_employee: string;

  @ManyToOne(type => Employee, employee => employee.id, { eager: true })
  @JoinColumn({ name: 'id_employee' })
  employee: Employee;

  @Column()
  name: string;

  @Column()
  course: string;
}

export default Subject;
