const ProjectModel = require("../models/project.model");

const createProjectController = async (req, res) => {
  const { user } = req.body;
  try {
    const newProject = new ProjectModel(req.body);
    await newProject.save();
    const allProjects = await ProjectModel.find({ user });
    res
      .status(201)
      .json({ message: "New project created", projects: allProjects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProjectsController = async (req, res) => {
  const { userId } = req.params;
  try {
    const allProjects = await ProjectModel.find({ user: userId });
    res.status(200).json({ message: "All projects", projects: allProjects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProjectController = async (req, res) => {
  const { projectID } = req.body;
  try {
    await ProjectModel.findByIdAndDelete(projectID);
    res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProjectController,
  getProjectsController,
  deleteProjectController,
};
