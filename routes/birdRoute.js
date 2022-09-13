import express from "express";
import {
  createBird,
  deleteBirdById,
  getAllBirds,
  getBirdById,
  updateBird,
} from "../controllers/birdController.js";

const router = express.Router();

router.post("/create", createBird);

router.get("/get", getAllBirds);

router.get("/get/:id", getBirdById);

router.delete("/delete/:id", deleteBirdById);

router.put("/update/:id", updateBird);

export default router;
