import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';
const ProfessionalExperienceModel = database.define(
  'professionalExperience',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    company: {
      type: STRING,
      allowNull: true,
    },
    position: {
      type: STRING,
      allowNull: true,
    },
    startDate: {
      type: STRING,
      allowNull: true,
    },
    endDate: {
      type: STRING,
      allowNull: true,
    },
  }
);
export { ProfessionalExperienceModel };