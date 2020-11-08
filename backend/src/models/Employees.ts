import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';

import Subject from './Subjects';

@Entity('employees')
class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  date_birth: Date;

  @Column()
  cnh: string;

  @Column()
  position: string;

  @Column()
  isProfessor: number;
}

export default Employee;
