import { Router } from 'express';
import { getRepository } from 'typeorm';

import Student from '../models/Students';
import AppError from '../errors/AppError';
import CreateStudentService from '../services/CreateStudentService';

const studentsRouter = Router();

studentsRouter.get('/', async (request, response) => {
  const studentRepository = getRepository(Student);
  const student = await studentRepository.find();
  return response.json(student);
});

studentsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const studentRepository = getRepository(Student);
  const student = await studentRepository.findOne(id);
  return response.json(student);
});

studentsRouter.post('/', async (request, response) => {
  const { name, email, course, date_birth, registration_date } = request.body;

  const createStudent = new CreateStudentService();

  const student = await createStudent.execute({
    name,
    email,
    course,
    date_birth,
    registration_date,
  });

  return response.json(student);
});

studentsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, email, course, date_birth, registration_date } = request.body;

  const studentsRepository = getRepository(Student);

  const updatedStudent = {
    id,
    name,
    email,
    course,
    date_birth,
    registration_date,
  };

  await studentsRepository.save(updatedStudent);

  return response.json(updatedStudent);
});

studentsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const studentsRepository = getRepository(Student);

  // const checkStudentExists = await studentsRepository.findOne({
  //   where: { id },
  // });

  // if (!checkStudentExists) {
  //   throw new AppError('Invalid id.');
  // }
  studentsRepository.delete(id);

  return response.status(204).send();
});

export default studentsRouter;
