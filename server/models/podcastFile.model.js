const mongoose = require("mongoose");

const podcastFileSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "project",
      required: true,
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    uploadDateTime: { type: Date, default: Date.now },
    status: { type: Boolean, default: true },
  },
  {
    versionKey: false,
  }
);

const PodcastFileModel = mongoose.model("podcastFile", podcastFileSchema);

module.exports = podcastFileModel;
