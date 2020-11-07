import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Student from '../models/Students';

interface Request {
  name: string;
  email: string;
  course: string;
  date_birth: Date;
  registration_date: Date;
}

class CreateStudentService {
  public async execute({
    name,
    email,
    course,
    date_birth,
    registration_date,
  }: Request): Promise<Student> {
    const studentsRepository = getRepository(Student);

    const checkStudentExists = await studentsRepository.findOne({
      where: { email },
    });

    if (checkStudentExists) {
      throw new AppError('Email address alreary used.');
    }

    const student = studentsRepository.create({
      name,
      email,
      course,
      date_birth,
      registration_date,
    });

    await studentsRepository.save(student);

    return student;
  }
}

export default CreateStudentService;
