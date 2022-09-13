import express from "express";
import connectionToMongo from "./utils/connection.js";
import birdRoute from "./routes/birdRoute.js";
import dogRoute from "./routes/dogRoute.js";
import catRoute from "./routes/catRoute.js";

const app = express();
const port = 3002;

app.use(express.json());

app.use("/api/bird/", birdRoute);
app.use("/api/dog/", dogRoute);
app.use("/api/cat/", catRoute);

app.listen(port, () => {
  connectionToMongo();
  console.log(`Example app listening on port ${port}`);
});
