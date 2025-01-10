import express from 'express';
import { addToWishlist, getWishlist } from '../controllers/wishlist.controller.js';

const router = express.Router();

// Add a book to wishlist
router.post('/add', addToWishlist);

// Get user wishlist
router.get('/:usr_id', getWishlist);

export default router;
