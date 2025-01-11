import { Router } from "express";
import { bookSelling } from "../controllers/bookSelling.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// Handle POST request for book selling with multiple file uploads
router.route("/bookselling").post(
  upload.fields([
    { name: "pictures", maxCount: 4 }, // Accept up to 3 files in the "images" field
  ]),
  bookSelling
);

export default router;
