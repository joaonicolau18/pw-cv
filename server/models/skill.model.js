import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';
const SkillModel = database.define(
  'skill', 
  {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  level: {
    type: INTEGER,
    allowNull: false,
  },
});

export { SkillModel };