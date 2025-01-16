
//import { User } from "../Models/user.model.js";
import { Book } from "../Models/bookSelling.model.js";
//import { ApiError } from "../utils/ApiError.js"; // Import custom error handling utility if required
import asyncHandler from "../utils/asyncHandler.js"; // Import asyncHandler for consistency

import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../Models/user.model.js";

// export const verifyAccessToken = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     throw new ApiError(401, "Access token missing or invalid");
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//     const user = await User.findById(decoded.id).select("-password -refreshToken");

//     if (!user) {
//       throw new ApiError(401, "User not found");
//     }

//     req.user = user; // Attach user information to the request object
//     next();
//   } catch (error) {
//     throw new ApiError(401, "Invalid or expired access token");
//   }
// };


// Get User Profile

export const verifyAccessToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.error("Received Token:", authHeader);
    throw new ApiError(401, "Access token missing or invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = await User.findById(decoded.id).select("-password -refreshToken");
    if (!req.user) {
      throw new ApiError(401, "User not found");
    }
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    throw new ApiError(401, "Invalid or expired access token");
  }
};



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