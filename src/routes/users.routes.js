import express from "express";
import { loginUser, logoutUser, refreshToken, registerUser, uploadImage } from "../controllers/users.controllers.js";

import { upload } from "../middleware/middleware.multer.js";

const router = express.Router();

//* Register User
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/refreshToken", refreshToken);
router.post("/uploadimage", upload.single("image"), uploadImage);


export default router;