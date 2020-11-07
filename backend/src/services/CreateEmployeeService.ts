import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Employee from '../models/Employees';

interface Request {
  name: string;
  email: string;
  date_birth: Date;
  cnh: string;
  position: string;
  isProfessor: number;
}

class CreateEmployeeService {
  public async execute({
    name,
    email,
    date_birth,
    cnh,
    position,
    isProfessor,
  }: Request): Promise<Employee> {
    const employeesRepository = getRepository(Employee);

    const checkEmployeeExists = await employeesRepository.findOne({
      where: { email },
    });

    if (checkEmployeeExists) {
      throw new AppError('Email address alreary used.');
    }

    if (!(isProfessor === 0 || isProfessor === 1)) {
      throw new AppError('Invalid format for isProfessor.');
    }

    const employee = employeesRepository.create({
      name,
      email,
      date_birth,
      cnh,
      position,
      isProfessor,
    });

    await employeesRepository.save(employee);

    return employee;
  }
}

export default CreateEmployeeService;
