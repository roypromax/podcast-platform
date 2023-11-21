const express = require("express");
const { connection } = require("./configs/db.js");
const userRouter = require("./routes/user.route.js");
const projectRouter = require("./routes/project.route.js");

require("dotenv").config();

const port = process.env.port || 8080;
const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/project", projectRouter);

app.get("/", (req, res) => {
  res.send("Podcast Platform Backend");
});

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database");
    console.log({ error: error });
  }
  console.log(`Server is running at port ${port}`);
});
