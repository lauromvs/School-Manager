import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import StudentSubject from '../models/StudentsSubjects';

interface Request {
  id_student: string;
  id_subject: string;
  n1: number;
  n2: number;
  frequency: number;
  quantity_given_classes: number;
}

class CreateStudentSubjectService {
  public async execute({
    id_student,
    id_subject,
    n1,
    n2,
    frequency,
    quantity_given_classes,
  }: Request): Promise<StudentSubject> {
    const studentsSubjectsRepository = getRepository(StudentSubject);

    if (n1 > 10 || n1 < 0) {
      throw new AppError('Valor de N1 deve ser entre 0 e 10');
    }

    let average = 0;

    if (n2) {
      if (n2 > 10 || n2 < 0) {
        throw new AppError('Valor de N2 deve ser entre 0 e 10');
      }
      average = n1 * 0.4 + n2 * 0.6;
    }

    if (frequency < 0 || frequency > 80) {
      throw new AppError('Valor de frequência deve ser entre 0 e 80');
    }

    if (quantity_given_classes < 0 || quantity_given_classes > 80) {
      throw new AppError(
        'Quantidade de aulas ministradas deve ser entre 0 e 80',
      );
    }

    if (quantity_given_classes < frequency) {
      throw new AppError(
        'Frequência não pode ser maior que quantidade de aulas ministradas',
      );
    }

    let status;

    // frequencia max = 80 => 0.75 * 80 = 60

    if (!average || !frequency) {
      status = '-';
    } else if (frequency < 60) {
      status = 'RF'; // reprovado por falta
    } else if (average < 6) {
      status = 'RM'; // reprovado por média
    } else {
      status = 'AP'; // aprovado
    }

    // verificar se esse aluno já está associado a essa matéria:
    const studentSubjectExists = await studentsSubjectsRepository.findOne({
      where: {
        id_student,
        id_subject,
      },
    });

    if (studentSubjectExists) {
      studentSubjectExists.n1 = n1;
      studentSubjectExists.n2 = n2;
      studentSubjectExists.average = average;
      studentSubjectExists.frequency = frequency;
      studentSubjectExists.status = status;
      studentSubjectExists.quantity_given_classes = quantity_given_classes;

      await studentsSubjectsRepository.save(studentSubjectExists);
    } else {
      const studentSubject = studentsSubjectsRepository.create({
        id_student,
        id_subject,
        n1,
        n2,
        frequency,
        quantity_given_classes,
        average,
        status,
      });

      await studentsSubjectsRepository.save(studentSubject);

      return studentSubject;
    }
  }
}

export default CreateStudentSubjectService;
