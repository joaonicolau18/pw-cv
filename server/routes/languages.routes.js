import Router from 'express';
import { createLanguage, getLanguages, deleteLanguage } from '../controllers/languages.controller.js';

const languageRoutes = Router();

// Rota para criar uma nova habilidade
languageRoutes.post('/create', createLanguage);

// Rota para obter todas as habilidades
languageRoutes.get('/', getLanguages);

languageRoutes.delete('/delete/:name', deleteLanguage);

export { languageRoutes };