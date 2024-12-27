import { BlogModel } from './blogs.model';
import { IBlog } from './blogs.interface';

// Create a new blog
const createBlog = async (blog: IBlog) => {
  const result = await BlogModel.create(blog);
  return result;
};

// Get all blogs
const getBlogs = async () => {
  const result = await BlogModel.find();
  return result;
};

// Get a single blog by ID
const getSingleBlog = async (id: string) => {
  const result = await BlogModel.findById(id);
  return result;
};

// Update a blog by ID
const updateBlog = async (id: string, updatedBlog: IBlog) => {
  const result = await BlogModel.findByIdAndUpdate(id, updatedBlog, {
    new: true,
    runValidators: true,
  });
  return result;
};

// Delete a blog by ID
const deleteBlog = async (id: string) => {
  const result = await BlogModel.findByIdAndDelete(id);
  return result;
};

export const blogServices = {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
