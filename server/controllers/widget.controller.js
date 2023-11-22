const WidgetModel = require("../models/widget.model");

const createWidgetController = async (req, res) => {
  try {
    const newWidget = new WidgetModel(req.body);
    await newWidget.save();
    res.status(201).json({ message: "New widget created", widget: newWidget });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWidgetController = async (req, res) => {
  const { projectId } = req.params;
  try {
    const widget = await WidgetModel.findOne({ project: projectId });
    res.status(200).json({ message: "Widget details", widget });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createWidgetController, getWidgetController };
