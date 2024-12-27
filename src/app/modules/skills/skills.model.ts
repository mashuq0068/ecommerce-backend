import { Schema, model } from 'mongoose';

const skillSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  level: { type: String, required: false },
});

export const SkillModel = model('Skill', skillSchema);
