import { Request, Response, NextFunction } from 'express';
import { skillServices } from './skills.service';


// Create a new skill
const createSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skill = req.body;
    const result = await skillServices.createSkill(skill);
    res.status(200).json({
      success: true,
      message: 'Skill created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get all skills
const getSkills = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await skillServices.getSkills();
    res.status(200).json({
      success: true,
      message: 'Skills fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single skill by ID
const getSingleSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.skillId;
    const result = await skillServices.getSingleSkill(id);
    res.status(200).json({
      success: true,
      message: 'Skill fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Update a skill by ID
const updateSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedSkill = req.body;
    const id = req.params.skillId;
    const result = await skillServices.updateSkill(id, updatedSkill);
    res.status(200).json({
      success: true,
      message: 'Skill updated successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a skill by ID
const deleteSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.skillId;
    const result = await skillServices.deleteSkill(id);
    res.status(200).json({
      success: true,
      message: 'Skill deleted successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const skillControllers = {
  createSkill,
  getSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
