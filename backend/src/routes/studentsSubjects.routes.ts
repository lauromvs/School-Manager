import { Router } from 'express';
import { getRepository } from 'typeorm';

import StudentSubject from '../models/StudentsSubjects';
import Students from '../models/Students';
import Subjects from '../models/Subjects';

import AppError from '../errors/AppError';
import CreateStudentSubjectService from '../services/CreateStudentSubjectService';

const studentsSubjectsRouter = Router();

studentsSubjectsRouter.get('/', async (request, response) => {
  const studentSubjectRepository = getRepository(StudentSubject);
  const studentSubject = await studentSubjectRepository.find();
  return response.json(studentSubject);
});

studentsSubjectsRouter.get(
  '/student/:id_student',
  async (request, response) => {
    const { id_student } = request.params;
    const studentSubjectRepository = getRepository(StudentSubject);

    const subjectsStudents = await studentSubjectRepository.find({
      where: { id_student },
    });
    const id_subjects = subjectsStudents.map(subject => subject.id_subject);

    return response.json(id_subjects);
  },
);

studentsSubjectsRouter.get('/evasion', async (request, response) => {
  const studentSubjectRepository = getRepository(StudentSubject);
  const studentRepository = getRepository(Students);
  const subjectRepository = getRepository(Subjects);

  const subjectsStudents = await studentSubjectRepository.find();
  const result = subjectsStudents.filter(student => {
    const qtd = student.quantity_given_classes;
    const freq = student.frequency;
    if (freq < qtd * 0.75) {
      return student;
    }
  });

  return response.json(result);
});

studentsSubjectsRouter.post('/', async (request, response) => {
  const {
    id_student,
    id_subject,
    n1,
    n2,
    frequency,
    quantity_given_classes,
  } = request.body;

  const createStudentSubject = new CreateStudentSubjectService();

  const studentSubject = await createStudentSubject.execute({
    id_student,
    id_subject,
    n1,
    n2,
    frequency,
    quantity_given_classes,
  });

  return response.json(studentSubject);
});

studentsSubjectsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const studentSubjectRepository = getRepository(StudentSubject);

  studentSubjectRepository.delete(id);

  return response.status(204).send();
});

export default studentsSubjectsRouter;
