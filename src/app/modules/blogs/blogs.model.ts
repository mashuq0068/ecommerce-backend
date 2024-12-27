import { Schema, model } from 'mongoose';
import { IBlog } from './blogs.interface';

const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: false },
  tags: { type: [String], required: false },
  publishedDate: { type: Date, required: false },
});

export const BlogModel = model<IBlog>('Blog', blogSchema);
