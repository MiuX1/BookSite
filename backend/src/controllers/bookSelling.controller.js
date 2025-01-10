import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Book } from "../Models/bookSelling.model.js";
import { uploadOnCloudinary } from "../utils/cloudinaryfileUpload.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// /**
//  * Controller to list a new book for sale.
//  */
// const bookSelling = asyncHandler(async (req, res) => {
//   const { title, author, description, price, category } = req.body;

//   console.log(req.body);

//   // Validate required fields
//   if (
//     [title, author, description, price, category,genre].some(
//       (field) => !field?.trim()
//     )
//   ) {
//     throw new ApiError(400, "All fields are required");
//   }

//   // Check for uploaded files
//   const files = req.files?.images;
//   if (!files || files.length === 0) {
//     throw new ApiError(400, "At least one book image is required");
//   }

//   // Upload images to Cloudinary
//   const uploadedImages = await Promise.all(
//     files.map((file) => uploadOnCloudinary(file.path))
//   );

//   // Extract image URLs
//   const imageUrls = uploadedImages.map((upload) => upload.url);

//   // Create the book in the database
//   const book = await Book.create({
//     title,
//     author,
//     description,
//     price,
//     category,
//     genre,
//     images: imageUrls,
//     // seller: req.user._id, // Uncomment if user authentication is implemented
//   });

//   return res.status(201).json(
//     new ApiResponse(201, "Book listed for sale successfully", {
//       book,
//     })
//   );
// });

const bookSelling = asyncHandler(async (req, res) => {
  const { title, author, description, price, seller_id, ISBN, genre, condition } = req.body;

  console.log("Request Body:", req.body);

  if (
    [title, author, description, price, seller_id, ISBN, genre, condition].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const imagesLocalPath = req.files?.images[0].path;

  if (!imagesLocalPath) {
    throw new ApiError(400, "At least one book image is required");
  }

  const BookImages = await uploadOnCloudinary(imagesLocalPath);

  if (!BookImages) {
    throw new ApiError(400, "Book image upload failed");
  }

  const newBook = await Book.create({
    title,
    author,
    description,
    price,
    ISBN,
    genre,
    condition,
    images: BookImages.url,
  });

  return res.status(201).json(new ApiResponse(200, "Book Listed for Sale Successfully"));
});
 export { bookSelling };
