import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

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
