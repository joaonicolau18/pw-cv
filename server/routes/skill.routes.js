import Router from 'express';
import { createSkill, getSkills } from '../controllers/skill.controller.js';

const skillRoutes = Router();

// Rota para criar uma nova habilidade
skillRoutes.post('/create', createSkill);

// Rota para obter todas as habilidades
skillRoutes.get('/', getSkills);

export { skillRoutes };