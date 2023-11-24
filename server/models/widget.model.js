const mongoose = require("mongoose");

const widgetSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "project",
      required: true,
    },
    botIcon: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const WidgetModel = mongoose.model("widget", widgetSchema);

module.exports = WidgetModel;
