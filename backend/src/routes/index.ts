import { Router } from 'express';

import studentsRouter from './students.routes';
import employeesRouter from './employees.routes';
import subjectsRouter from './subjects.routes';
import studentsSubjectsRouter from './studentsSubjects.routes';

const routes = Router();

routes.use('/students', studentsRouter);
routes.use('/employees', employeesRouter);
routes.use('/subjects', subjectsRouter);
routes.use('/studentsSubjects', studentsSubjectsRouter);

export default routes;
