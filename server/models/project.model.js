const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    name: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;
