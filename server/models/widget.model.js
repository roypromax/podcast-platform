const mongoose = require("mongoose");

const generalSchema = new mongoose.Schema({
  chatbotName: { type: String, required: true },
  welcomeMessage: { type: String, required: true },
  inputPlaceholder: { type: String, required: true },
});

const displaySchema = new mongoose.Schema({
  primaryColor: { type: String, required: true },
  fontColor: { type: String, required: true },
  fontSize: { type: Number, required: true },
  chatHeight: { type: Number, required: true },
  showSuccess: { type: Boolean, required: true },
  chatIconSize: { type: Number, required: true },
  positionOnScreen: { type: String, required: true },
  distanceFromBottom: { type: Number, required: true },
  horizontalDistance: { type: Number, required: true },
  botIcon: { type: String, required: true },
});

const widgetSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "project",
      required: true,
    },
    general: generalSchema,
    display: displaySchema,
  },
  {
    versionKey: false,
  }
);

const WidgetModel = mongoose.model("widget", widgetSchema);

module.exports = WidgetModel;
