import { Router } from 'express';
import { getRepository } from 'typeorm';

import Subject from '../models/Subjects';
import AppError from '../errors/AppError';
import CreateSubjectService from '../services/CreateSubjectService';

const subjectsRouter = Router();

subjectsRouter.get('/', async (request, response) => {
  const subjectRepository = getRepository(Subject);
  const subject = await subjectRepository.find();
  return response.json(subject);
});

subjectsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const subjectRepository = getRepository(Subject);
  const subject = await subjectRepository.findOne(id);
  return response.json(subject);
});

subjectsRouter.get('/professor/:id_employee', async (request, response) => {
  const { id_employee } = request.params;
  const subjectRepository = getRepository(Subject);
  const subject = await subjectRepository.find({
    where: { id_employee },
  });
  return response.json(subject);
});

subjectsRouter.post('/', async (request, response) => {
  const { name, course, id_employee } = request.body;

  const createSubject = new CreateSubjectService();

  const subject = await createSubject.execute({
    name,
    course,
    id_employee,
  });

  return response.json(subject);
});

subjectsRouter.post('/student', async (request, response) => {
  const { body } = request;
  const subjects: Subject[] = [];
  const subjectRepository = getRepository(Subject);

  const getSubjects = async () => {
    return Promise.all(
      body.map(async (id_subject: string) => {
        const newSubject = await subjectRepository.findOne(id_subject);
        if (newSubject) {
          subjects.push(newSubject);
        }
      }),
    );
  };

  getSubjects().then(() => {
    return response.json(subjects);
  });
});

subjectsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, course, id_employee } = request.body;

  const subjectsRepository = getRepository(Subject);

  const updatedSubject = {
    id,
    name,
    course,
    id_employee,
  };

  await subjectsRepository.save(updatedSubject);

  return response.json(updatedSubject);
});

subjectsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const subjectsRepository = getRepository(Subject);

  // const checkSubjectExists = await subjectsRepository.findOne({
  //   where: { id },
  // });

  // if (checkSubjectExists) {
  //   throw new AppError('Invalid id.');
  // }
  subjectsRepository.delete(id);

  return response.status(204).send();
});

export default subjectsRouter;
