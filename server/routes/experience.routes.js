import Router from 'express';
import {
  createProfessionalExperience,
  getProfessionalExperience
} from '../controllers/experience.controller.js';

const professionalExperienceRoutes = Router();

// POST
professionalExperienceRoutes.post('/create', createProfessionalExperience);

// GET
professionalExperienceRoutes.get('/', getProfessionalExperience);

export { professionalExperienceRoutes };
