import { INTEGER, STRING, DATE } from 'sequelize';
import { database } from '../config/context/database.js';

const CertificatesModel = database.define(
  'certificates',
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
    issuer: {
      type: STRING,
      allowNull: true,
    },
    date: {
      type: DATE,
      allowNull: true,
    },
  }
);

export { CertificatesModel };