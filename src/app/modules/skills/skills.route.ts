import express from 'express';
import { skillControllers } from './skills.controller';


const router = express.Router();

// Create a new skill
router.post('/', skillControllers.createSkill);

// Get all skills
router.get('/', skillControllers.getSkills);

// Get a single skill by ID
router.get('/:skillId', skillControllers.getSingleSkill);

// Update a skill by ID
router.put('/:skillId', skillControllers.updateSkill);

// Delete a skill by ID
router.delete('/:skillId', skillControllers.deleteSkill);

export const skillRoutes = router;
