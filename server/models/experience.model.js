import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';
const ProfessionalExperienceModel = database.define(
  'professional_experience',
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
      type: DATE,
      allowNull: true,
    },
    endDate: {
      type: DATE,
      allowNull: true,
    },
  }
);
export { ProfessionalExperienceModel };