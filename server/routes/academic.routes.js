import Router from 'express';
import {
  createAcademicQualification,
  getAcademicQualification,
  updateAcademicQualification,
  deleteAcademicQualification,
} from '../controllers/academic.controller.js';

const academicRoutes = Router();

// POST
academicRoutes.post('/create', createAcademicQualification);

// GET 
academicRoutes.get('/', getAcademicQualification);

// PUT 
academicRoutes.put('/:id', updateAcademicQualification);

// DELETE 
academicRoutes.delete('/:id', deleteAcademicQualification);

export { academicRoutes };


