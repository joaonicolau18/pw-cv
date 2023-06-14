import Router from 'express';
import {
  createProfessionalExperience,
  getProfessionalExperience,
  updateProfessionalExperience,
  deleteProfessionalExperience
} from '../controllers/experience.controller.js';

const professionalExperienceRoutes = Router();

// POST
professionalExperienceRoutes.post('/create', createProfessionalExperience);

// GET
professionalExperienceRoutes.get('/', getProfessionalExperience);

// PUT
professionalExperienceRoutes.put('/update/:id', updateProfessionalExperience);

// DELETE
professionalExperienceRoutes.delete('/delete/:id', deleteProfessionalExperience);

export { professionalExperienceRoutes };
