import express from "express";
import {
  createCat,
  deleteCatById,
  getAllCats,
  getCatById,
  updateCat,
} from "../controllers/catController.js";

const router = express.Router();

router.post("/create", createCat);

router.get("/get", getAllCats);

router.get("/get/:id", getCatById);

router.delete("/delete/:id", deleteCatById);

router.put("/update/:id", updateCat);

export default router;
