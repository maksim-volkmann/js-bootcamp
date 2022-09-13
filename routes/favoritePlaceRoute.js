import express from "express";
import {
  deleteFavoriteRoomById,
  getAllFavoriteRooms,
  getFavoriteRoomById,
  updateFavoriteRoom,
} from "../controller/favoriteRoomController.js";

const router = express.Router();

router.get("/get", getAllFavoriteRooms);

router.get("/get/:id", getFavoriteRoomById);

router.delete("/delete/:id", deleteFavoriteRoomById);

router.put("/update/:id", updateFavoriteRoom);

export default router;
