import { Request, Response, NextFunction } from 'express';
import { projectServices } from './projects.service';

// Create a new project
const createProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const project = req.body;
    const result = await projectServices.createProject(project);
    res.status(200).json({
      success: true,
      message: 'Project created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get all projects
const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await projectServices.getProjects();
    res.status(200).json({
      success: true,
      message: 'Projects fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single project by ID
const getSingleProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.projectId;
    const result = await projectServices.getSingleProject(id);
    res.status(200).json({
      success: true,
      message: 'Project fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Update a project by ID
const updateProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedProject = req.body;
    const id = req.params.projectId;
    const result = await projectServices.updateProject(id, updatedProject);
    res.status(200).json({
      success: true,
      message: 'Project updated successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a project by ID
const deleteProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.projectId;
    const result = await projectServices.deleteProject(id);
    res.status(200).json({
      success: true,
      message: 'Project deleted successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const projectControllers = {
  createProject,
  getProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
