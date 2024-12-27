import { ISkill } from "./skills.interface";
import { SkillModel } from "./skills.model";


// Create a new skill
const createSkill = async (skill: ISkill) => {
  const result = await SkillModel.create(skill);
  return result;
};

// Get all skills
const getSkills = async () => {
  const result = await SkillModel.find();
  return result;
};

// Get a single skill by ID
const getSingleSkill = async (id: string) => {
  const result = await SkillModel.findById(id);
  return result;
};

// Update a skill by ID
const updateSkill = async (id: string, updatedSkill: ISkill) => {
  const result = await SkillModel.findByIdAndUpdate(id, updatedSkill, {
    new: true,
    runValidators: true,
  });
  return result;
};

// Delete a skill by ID
const deleteSkill = async (id: string) => {
  const result = await SkillModel.findByIdAndDelete(id);
  return result;
};

export const skillServices = {
  createSkill,
  getSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
