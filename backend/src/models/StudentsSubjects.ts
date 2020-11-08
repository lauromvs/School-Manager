import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Student from './Students';
import Subject from './Subjects';

@Entity('studentsSubjects')
class StudentSubject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_student: string;

  @ManyToOne(type => Student, student => student.name, { eager: true })
  @JoinColumn({ name: 'id_student' })
  student: Student;

  @Column()
  id_subject: string;

  @ManyToOne(type => Subject, subject => subject.name, { eager: true })
  @JoinColumn({ name: 'id_subject' })
  subject: Subject;

  @Column('decimal')
  n1: number;

  @Column('decimal')
  n2: number;

  @Column('decimal')
  average: number;

  @Column()
  frequency: number;

  @Column()
  quantity_given_classes: number;

  @Column()
  status: string;
}

export default StudentSubject;
