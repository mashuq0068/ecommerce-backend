import { Schema, model } from 'mongoose';
import { IProject } from './projects.interface';

const technologySchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
});

const projectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true },
  liveLink: { type: String, required: true },
  frontendRepo: { type: String, required: true },
  backendRepo: { type: String, required: false },
  technologies: { type: [technologySchema], default: [] }, // Default to empty array if not provided
});

export const ProjectModel = model<IProject>('Project', projectSchema);
