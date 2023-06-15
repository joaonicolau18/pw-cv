import Router from 'express';
import { createContact, getContacts, updateContact } from '../controllers/contact.controller.js';

const contactRoutes = Router();

// Rota para criar um contato
contactRoutes.post('/create', createContact);

// Rota para obter todos os contatos
contactRoutes.get('/', getContacts);

// Rota para atualizar um contato
contactRoutes.put('/update/:id', updateContact);

export { contactRoutes };
