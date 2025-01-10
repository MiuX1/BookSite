import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
  wishlist_id: {
    type: String,
    required: true,
    unique: true,
  },
  usr_id: {
    type: String,
    required: true,
    ref: 'User', // Reference to User model
  },
  book_id: {
    type: String,
    required: true,
    ref: 'Book', // Reference to Book model
  },
}, { timestamps: true });

export const Wishlist = mongoose.model('Wishlist', wishlistSchema);
