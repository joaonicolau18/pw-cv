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

export const updateProfessionalExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const { company, position, startDate, endDate } = req.body;

    const professionalExperience = await ProfessionalExperienceModel.findByPk(id);

    if (!professionalExperience) {
      return res.status(404).json({ error: 'Professional experience not found' });
    }

    professionalExperience.company = company;
    professionalExperience.position = position;
    professionalExperience.startDate = startDate;
    professionalExperience.endDate = endDate;

    await professionalExperience.save();

    return res.json({ message: 'Professional experience updated successfully' });
  } catch (error) {
    console.error('Error updating professional experience:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteProfessionalExperience = async (req, res) => {
  try {
    const { id } = req.params;

    const professionalExperience = await ProfessionalExperienceModel.findByPk(id);

    if (!professionalExperience) {
      return res.status(404).json({ error: 'Professional experience not found' });
    }

    await professionalExperience.destroy();

    return res.json({ message: 'Professional experience deleted successfully' });
  } catch (error) {
    console.error('Error deleting professional experience:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};