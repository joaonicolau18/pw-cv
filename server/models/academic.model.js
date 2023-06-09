import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';
const AcademicQualificationModel = database.define(
  'academicQualification',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    degree: {
      type: STRING,
      allowNull: true,
    },
    institution: {
      type: STRING,
      allowNull: true,
    },
    graduationYear: {
      type: INTEGER,
      allowNull: true,
    },
  }
);
export { AcademicQualificationModel };