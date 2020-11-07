import { Router } from 'express';
import { getRepository } from 'typeorm';

import Employee from '../models/Employees';
import AppError from '../errors/AppError';
import CreateEmployeeService from '../services/CreateEmployeeService';

const employeesRouter = Router();

employeesRouter.get('/', async (request, response) => {
  const employeeRepository = getRepository(Employee);
  const employee = await employeeRepository.find();
  return response.json(employee);
});

employeesRouter.get('/professors', async (request, response) => {
  const employeeRepository = getRepository(Employee);
  const employee = await employeeRepository.find({
    where: { isProfessor: 1 },
  });
  return response.json(employee);
});

employeesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const employeeRepository = getRepository(Employee);
  const employee = await employeeRepository.findOne({
    where: { id },
  });
  return response.json(employee);
});

employeesRouter.post('/', async (request, response) => {
  const { name, email, date_birth, cnh, position, isProfessor } = request.body;

  const createEmployee = new CreateEmployeeService();

  const employee = await createEmployee.execute({
    name,
    email,
    date_birth,
    cnh,
    position,
    isProfessor,
  });

  return response.json(employee);
});

employeesRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, email, date_birth, cnh, position, isProfessor } = request.body;

  const employeesRepository = getRepository(Employee);

  const updatedEmployee = {
    id,
    name,
    email,
    date_birth,
    cnh,
    position,
    isProfessor,
  };

  await employeesRepository.save(updatedEmployee);

  return response.json(updatedEmployee);
});

employeesRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const employeesRepository = getRepository(Employee);

  // const checkEmployeeExists = await employeesRepository.findOne({
  //   where: { id },
  // });

  // if (checkEmployeeExists) {
  //   throw new AppError('Invalid id.');
  // }
  employeesRepository.delete(id);

  return response.status(204).send();
});

export default employeesRouter;
