import express from 'express';
import { blogControllers } from './blogs.controller';

const router = express.Router();

// Create a new blog
router.post('/', blogControllers.createBlog);

// Get all blogs
router.get('/', blogControllers.getBlogs);

// Get a single blog by ID
router.get('/:blogId', blogControllers.getSingleBlog);

// Update a blog by ID
router.put('/:blogId', blogControllers.updateBlog);

// Delete a blog by ID
router.delete('/:blogId', blogControllers.deleteBlog);

export const blogRoutes = router;
