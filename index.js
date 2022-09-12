import express from "express";
import connectionToMongo from "./utils/connection.js";

const app = express();
const port = 3002;

app.listen(port, () => {
  connectionToMongo();
  console.log(`Example app listening on port ${port}`);
});
