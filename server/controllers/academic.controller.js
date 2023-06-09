import { AcademicQualificationModel } from '../models/academic.model.js';

export const createAcademicQualification = async (req, res) => {
  try {
    const { degree, institution, graduationYear } = req.body;
    const academicQualification = await AcademicQualificationModel.create({
      degree,
      institution,
      graduationYear,
    });
    return res.status(201).json(academicQualification);
  } catch (error) {
    console.error('Error creating academic qualification:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAcademicQualification = async (req, res) => {
  try {
    const academicQualifications = await AcademicQualificationModel.findAll();
    return res.json(academicQualifications);
  } catch (error) {
    console.error('Error retrieving academic qualifications:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateAcademicQualification = async (req, res) => {
  try {
    const { id } = req.params;
    const { degree, institution, graduationYear } = req.body;
    const [updatedRows] = await AcademicQualificationModel.update(
      {
        degree,
        institution,
        graduationYear,
      },
      {
        where: { id },
      }
    );
    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Academic qualification not found' });
    }
    return res.json({ message: 'Academic qualification updated successfully' });
  } catch (error) {
    console.error('Error updating academic qualification:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteAcademicQualification = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await AcademicQualificationModel.destroy({
      where: { id },
    });
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Academic qualification not found' });
    }
    return res.json({ message: 'Academic qualification deleted successfully' });
  } catch (error) {
    console.error('Error deleting academic qualification:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};