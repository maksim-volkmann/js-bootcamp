import express from "express";
import {
  deleteDogById,
  getAllDogs,
  getDogById,
  updateDog,
} from "../controllers/dogController.js";

const router = express.Router();

router.get("/get", getAllDogs);

router.get("/get/:id", getDogById);

router.delete("/delete/:id", deleteDogById);

router.put("/update/:id", updateDog);

export default router;
