import { Router } from "express";
import { getBooks } from "../controllers/marketplace.controller.js"; // Correctly import the controller

const router = Router();

// Route to get books with optional filters
router.route("/books").get(getBooks);

// Default export
export default router;
