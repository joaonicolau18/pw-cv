import { ContactModel } from '../models/contact.model.js';

export const createContact = (req, res) => {
  const { location, email, phone } = req.body;
  ContactModel.create({ location, email, phone })
    .then((contact) => {
      res.status(201).json(contact);
    })
    .catch((error) => {
      console.error('Erro ao criar o contato:', error);
      res.status(500).json({ error: 'Erro ao criar o contato' });
    });
};

export const getContacts = (req, res) => {
  ContactModel.findAll()
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((error) => {
      console.error('Erro ao obter os contatos:', error);
      res.status(500).json({ error: 'Erro ao obter os contatos' });
    });
};

export const updateContact = (req, res) => {
  const { id } = req.params;
  const { location, email, phone } = req.body;
  ContactModel.findByPk(id)
    .then((existingContact) => {
      if (!existingContact) {
        return res.status(404).json({ error: 'Contato não encontrado' });
      }
      ContactModel.update({ location, email, phone }, { where: { id } })
        .then(() => {
          ContactModel.findByPk(id)
            .then((updatedContact) => {
              res.json(updatedContact);
            })
            .catch((error) => {
              console.error('Erro ao obter o contato atualizado:', error);
              res.status(500).json({ error: 'Erro ao obter o contato atualizado' });
            });
        })
        .catch((error) => {
          console.error('Erro ao atualizar o contato:', error);
          res.status(500).json({ error: 'Erro ao atualizar o contato' });
        });
    })
    .catch((error) => {
      console.error('Erro ao obter o contato existente:', error);
      res.status(500).json({ error: 'Erro ao obter o contato existente' });
    });
};


