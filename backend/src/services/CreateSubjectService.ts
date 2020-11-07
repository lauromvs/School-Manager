import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Subject from '../models/Subjects';

interface Request {
  name: string;
  course: string;
  id_employee: string;
}

class CreateSubjectService {
  public async execute({
    name,
    course,
    id_employee,
  }: Request): Promise<Subject> {
    const subjectsRepository = getRepository(Subject);

    const subject = subjectsRepository.create({
      name,
      course,
      id_employee,
    });

    await subjectsRepository.save(subject);

    return subject;
  }
}

export default CreateSubjectService;
