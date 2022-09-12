import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { invalidateCookie } from "../utils/invalidateCookie.js";

const verifyUser = (req, res, next) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    next();
  } else {
    return res.status(406).send("You are not authorized");
  }
};

const verifyAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    return res.status(406).send("You are not admin");
  }
};

export const verifySessionToken = (req, res, next) => {
  const token = req.cookies.session_token;

  if (!token) {
    return res.status(401).send("Not authorized!");
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    try {
      if (err) {
        return res.status(404).send("Token is not valid!");
      }

      req.user = decodedToken;

      const user = await userModel.findById(req.user.id);

      const recordsNotMatch = user ? user.isAdmin !== req.user.isAdmin : false;

      invalidateCookie(recordsNotMatch, res);

      const adminRoutes =
        req.params.path === "/get" || req.params.path === "/delete";

      adminRoutes ? verifyAdmin(req, res, next) : verifyUser(req, res, next);
    } catch (error) {
      console.error(error);
    }
  });
};
