import express from "express";
import { getUserProfile, updateUserProfile, getBooksListed, removeBookFromListed } from "../controllers/profile.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/userprofile", verifyJWT, getUserProfile); // Protect route with verifyJWT
router.put("/updateprofile", verifyJWT, updateUserProfile); // Protect route with verifyJWT
router.get("/listedbooks", verifyJWT, getBooksListed); // Protect route with verifyJWT
router.delete("/removebooks/:bookId", verifyJWT, removeBookFromListed); // Protect route with verifyJWT

export default router;
