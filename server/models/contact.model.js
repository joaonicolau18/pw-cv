import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';
const ContactModel = database.define(
  'contact',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: true,
    },
    email: {
      type: STRING,
      allowNull: true,
      unique: true,
    },
    phone: {
      type: STRING,
      allowNull: true,
    },
  }
);
export { ContactModel };