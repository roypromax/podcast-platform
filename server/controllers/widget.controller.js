const cloudinary = require("cloudinary").v2;
const WidgetModel = require("../models/widget.model");

require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const updateWidgetController = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const { file } = req;

    if (!file) {
      return res.status(400).json({ error: "Missing file in the request" });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto", public_id: projectId },
      async (error, result) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const widget = new WidgetModel({
          project: projectId,
          botIcon: result.secure_url,
        });

        try {
          await widget.save();
          res.status(200).json({ botIcon: widget.botIcon });
        } catch (saveError) {
          console.error(saveError);
          res.status(500).json({ error: "Internal Server Error" });
        }
      }
    );

    const bufferStream = new require("stream").PassThrough();
    bufferStream.end(file.buffer);
    bufferStream.pipe(uploadStream);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getWidgetController = async (req, res) => {
  try {
    const projectId = req.params.projectId;

    const widget = await WidgetModel.findOne({ project: projectId });

    if (!widget) {
      res.status(200).json({ botIcon: "" });
    } else {
      res.status(200).json({ botIcon: widget.botIcon });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  updateWidgetController,
  getWidgetController,
};
