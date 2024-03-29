const express = require("express");
const {
  createProjectController,
  getProjectsController,
  deleteProjectController,
} = require("../controllers/project.controller");

const projectRouter = express.Router();

projectRouter.get("/:userId", getProjectsController);

projectRouter.post("/create", createProjectController);

projectRouter.delete("/delete", deleteProjectController);

module.exports = projectRouter;
