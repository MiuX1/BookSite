import { Router } from "express";
import { bookSelling } from "../controllers/bookSelling.controller.js";

const router = Router()
router.route("/bookselling").post(bookSelling)

export default router