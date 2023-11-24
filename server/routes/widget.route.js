const express = require("express");
const multer = require("multer");
const {
  updateWidgetController,
  getWidgetController,
} = require("../controllers/widget.controller");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const widgetRouter = express.Router();

widgetRouter.post(
  "/create/:projectId",
  upload.single("file"),
  updateWidgetController
);

widgetRouter.get("/:projectId", getWidgetController);

module.exports = widgetRouter;
