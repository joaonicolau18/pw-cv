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
academicRoutes.put('/update/:id', updateAcademicQualification);

// DELETE 
academicRoutes.delete('/delete/:id', deleteAcademicQualification);

export { academicRoutes };


