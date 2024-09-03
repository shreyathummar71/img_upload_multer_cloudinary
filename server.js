require("dotenv").config();
const express = require("express");
const connectDB = require("./dbinit");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
const appRoute = require("./routes/appRoutes");

app.use("/api", appRoute);

app.get("/", (req, res) => {
  res.send("Cloudinary & multer");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
