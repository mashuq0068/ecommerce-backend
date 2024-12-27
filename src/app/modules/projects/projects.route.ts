import express from 'express';
import { projectControllers } from './projects.controller';

const router = express.Router();

// Create a new project
router.post('/', projectControllers.createProject);

// Get all projects
router.get('/', projectControllers.getProjects);

// Get a single project by ID
router.get('/:projectId', projectControllers.getSingleProject);

// Update a project by ID
router.put('/:projectId', projectControllers.updateProject);

// Delete a project by ID
router.delete('/:projectId', projectControllers.deleteProject);

export const projectRoutes = router;
