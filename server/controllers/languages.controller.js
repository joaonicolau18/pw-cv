import { languageModel } from '../models/languages.model.js';

export const createLanguage = async (req, res) => {
  try {
    const { name, level } = req.body;
    const language = await languageModel.create({
      name,
      level,
    });
    return res.status(201).json(language);
  } catch (error) {
    console.error('Error creating language:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getLanguages = async (req, res) => {
  try {
    const languages = await languageModel.findAll();
    return res.json(languages);
  } catch (error) {
    console.error('Error retrieving languages:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};