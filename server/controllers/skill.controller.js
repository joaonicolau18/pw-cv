import { SkillModel } from '../models/skill.model.js';

export const createSkill = async (req, res) => {
  try {
    const { name, level } = req.body;
    const skill = await SkillModel.create({
      name,
      level,
    });
    return res.status(201).json(skill);
  } catch (error) {
    console.error('Error creating skill:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getSkills = async (req, res) => {
  try {
    const skills = await SkillModel.findAll();
    return res.json(skills);
  } catch (error) {
    console.error('Error retrieving skills:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};