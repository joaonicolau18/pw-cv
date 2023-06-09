import { ProfessionalExperienceModel } from '../models/experience.model.js';

export const createProfessionalExperience = async (req, res) => {
  try {
    const { company, position, startDate, endDate } = req.body;
    const professionalExperience = await ProfessionalExperienceModel.create({
      company,
      position,
      startDate,
      endDate,
    });
    return res.status(201).json(professionalExperience);
  } catch (error) {
    console.error('Error creating professional experience:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getProfessionalExperience = async (req, res) => {
  try {
    const professionalExperiences = await ProfessionalExperienceModel.findAll();
    return res.json(professionalExperiences);
  } catch (error) {
    console.error('Error retrieving professional experiences:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};