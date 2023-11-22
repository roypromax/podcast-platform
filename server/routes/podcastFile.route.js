const express = require("express");
const {
  createPodcastFileController,
  getPodcastFilesController,
  updatePodcastFileController,
  deletePodcastFileController,
} = require("../controllers/podcastFile.controller");

const podcastFileRouter = express.Router();

podcastFileRouter.get("/:projectId", getPodcastFilesController);

podcastFileRouter.post("/create", createPodcastFileController);

podcastFileRouter.patch("/update/:fileId", updatePodcastFileController);

podcastFileRouter.delete("/delete/:fileId", deletePodcastFileController);

module.exports = podcastFileRouter;
