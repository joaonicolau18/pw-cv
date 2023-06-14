import Router from 'express';
import { createLanguage, getLanguages } from '../controllers/languages.controller.js';

const languageRoutes = Router();

// Rota para criar uma nova habilidade
languageRoutes.post('/create', createLanguage);

// Rota para obter todas as habilidades
languageRoutes.get('/', getLanguages);

export { languageRoutes };