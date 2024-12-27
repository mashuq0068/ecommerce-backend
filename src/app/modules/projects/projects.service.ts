import { ProjectModel } from './projects.model';
import { IProject } from './projects.interface';

// Create a new project
const createProject = async (project: IProject) => {
  const result = await ProjectModel.create(project);
  return result;
};

// Get all projects
const getProjects = async () => {
  const result = await ProjectModel.find();
  return result;
};

// Get a single project by ID
const getSingleProject = async (id: string) => {
  const result = await ProjectModel.findById(id);
  return result;
};

// Update a project by ID
const updateProject = async (id: string, updatedProject: IProject) => {
  const result = await ProjectModel.findByIdAndUpdate(id, updatedProject, {
    new: true,
    runValidators: true,
  });
  return result;
};

// Delete a project by ID
const deleteProject = async (id: string) => {
  const result = await ProjectModel.findByIdAndDelete(id);
  return result;
};

export const projectServices = {
  createProject,
  getProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
