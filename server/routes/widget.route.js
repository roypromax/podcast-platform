const express = require("express");
const {
  createWidgetController,
  getWidgetController,
} = require("../controllers/widget.controller");

const widgetRouter = express.Router();

widgetRouter.post("/create", createWidgetController);

widgetRouter.get("/:projectId", getWidgetController);

module.exports = widgetRouter;
