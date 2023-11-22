const PodcastFileModel = require("../models/podcastFile.model");

const createPodcastFileController = async (req, res) => {
  try {
    const newPodcastFile = new PodcastFileModel(req.body);
    await newPodcastFile.save();
    const allPodcastFiles = await PodcastFileModel.find({
      project: req.body.projectId,
    });
    res
      .status(201)
      .json({
        message: "New podcastFile created",
        podcastFiles: allPodcastFiles,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPodcastFilesController = async (req, res) => {
  const { projectId } = req.params;
  try {
    const podcastFiles = await PodcastFileModel.find({ project: projectId });
    res.status(200).json({ message: "All podcastFiles", podcastFiles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePodcastFileController = async (req, res) => {
  const { fileId } = req.params;
  const { description } = req.body;
  try {
    const updatedPodcastFile = await PodcastFileModel.findByIdAndUpdate(
      fileId,
      { $set: { description } },
      { new: true }
    );
    res
      .status(200)
      .json({
        message: "PodcastFile updated",
        podcastFile: updatedPodcastFile,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePodcastFileController = async (req, res) => {
  const { fileId } = req.params;
  try {
    await PodcastFileModel.findByIdAndDelete(fileId);
    res.status(200).json({ message: "PodcastFile deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPodcastFileController,
  getPodcastFilesController,
  updatePodcastFileController,
  deletePodcastFileController,
};
