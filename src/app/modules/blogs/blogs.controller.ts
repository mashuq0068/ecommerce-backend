import { Request, Response, NextFunction } from 'express';
import { blogServices } from './blogs.service';

// Create a new blog
const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blog = req.body;
    const result = await blogServices.createBlog(blog);
    res.status(200).json({
      success: true,
      message: 'Blog created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get all blogs
const getBlogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await blogServices.getBlogs();
    res.status(200).json({
      success: true,
      message: 'Blogs fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single blog by ID
const getSingleBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.blogId;
    const result = await blogServices.getSingleBlog(id);
    res.status(200).json({
      success: true,
      message: 'Blog fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Update a blog by ID
const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedBlog = req.body;
    const id = req.params.blogId;
    const result = await blogServices.updateBlog(id, updatedBlog);
    res.status(200).json({
      success: true,
      message: 'Blog updated successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a blog by ID
const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.blogId;
    const result = await blogServices.deleteBlog(id);
    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const blogControllers = {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
