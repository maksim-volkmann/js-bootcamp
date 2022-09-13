import express from "express";
import {
  createfavoritePlace,
  deleteFavoritePlaceById,
  getAllFavoritePlaces,
  getAnimalsByPlace,
  getFavoritePlaceById,
  getMostPopularPlace,
  updateFavoritePlace,
} from "../controllers/favoritePlaceController.js";

const router = express.Router();

router.post("/create", createfavoritePlace);

router.get("/get", getAllFavoritePlaces);

router.get("/get/popular", getMostPopularPlace);

router.get("/get/:id", getFavoritePlaceById);

router.delete("/delete/:id", deleteFavoritePlaceById);

router.put("/update/:id", updateFavoritePlace);

router.get("/get/place/:placeName", getAnimalsByPlace);

export default router;
