import Router from 'express';

import { todoRoutes } from './todo.routes.js';
import { usersRoutes } from './user.routes.js';
import { academicRoutes } from './academic.routes.js';
import { professionalExperienceRoutes } from './experience.routes.js';

const api = Router();
// http://localhost:4242/api/todo ....
api.use('/todo', todoRoutes);

// http://localhost:4242/api/user ....
api.use('/user', usersRoutes);

// http://localhost:4242/api/academic ....
api.use('/academic', academicRoutes);

// http://localhost:4242/api/experience ....
api.use('/experience', professionalExperienceRoutes);

export { api };
