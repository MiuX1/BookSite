import { User } from "../Models/user.model.js";
import { Book } from "../Models/bookSelling.model.js";
import { ApiError } from "../utils/ApiError.js"; // Import custom error handling utility if required
import asyncHandler from "../utils/asyncHandler.js"; // Import asyncHandler for consistency

// Get User Profile
export const getUserProfile = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new ApiError(401, "Unauthorized access");
  }
  res.json(req.user); // Use req.user directly
});

// Update User Profile
export const updateUserProfile = asyncHandler(async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    req.body,
    { new: true }
  ).select("-password -refreshToken");

  if (!updatedUser) {
    throw new ApiError(404, "User not found");
  }

  res.json(updatedUser);
});

// Get Books Listed by the User
export const getBooksListed = asyncHandler(async (req, res) => {
  const books = await Book.find({ userId: req.user.id });
  res.json(books);
});

// Remove Book from List
export const removeBookFromListed = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const deletedBook = await Book.findOneAndDelete({ _id: bookId, userId: req.user.id });

  if (!deletedBook) {
    throw new ApiError(404, "Book not found or not authorized to delete");
  }

  res.json({ message: "Book removed successfully", book: deletedBook });
});
