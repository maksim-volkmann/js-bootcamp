import express from "express";
import { verifySessionToken } from "../authCheck/authCheck.js";
import {
  deleteAllUsers,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/get", verifySessionToken, getAllUsers);

router.get("/get/:id", verifySessionToken, getUserById);

router.delete("/delete/:id", verifySessionToken, deleteUserById);

router.put("/update/:id", verifySessionToken, updateUser);

router.delete("/delete", verifySessionToken, deleteAllUsers);

export default router;
