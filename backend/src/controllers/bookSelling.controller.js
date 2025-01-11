import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Book } from "../Models/bookSelling.model.js";
import { uploadOnCloudinary } from "../utils/cloudinaryfileUpload.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Book selling controller function
const bookSelling = asyncHandler(async (req, res) => {
  // Destructuring request body to get necessary fields
  const {
    bookTitle,
    author,
    year,
    ISBN,
    bookType,
    bookCondition,
    quantityAvailable,
    price,
    additionalInfo,
    sellerName,
    address,
    sellerEmail,
    sellerPhoneNumber,
    pinCode,
    
  } = req.body;

  //console.log("Request Body:", req.body);
  //console.log('Uploaded files:', req.files);


  if( [
    bookTitle,
    author,
    year,
    ISBN,
    bookType,
    bookCondition,
    quantityAvailable,
    price,
    additionalInfo,
    sellerName,
    address,
    sellerEmail,
    sellerPhoneNumber,
    pinCode,
  ].some((field)=>field?.trim() === ""))
  {
    throw new ApiError(400,"all fields are required");
  }
  
  // requiredFields.forEach((field, index) => {
  //   console.log(`Field ${index + 1}:`, field);
  // });
  
  // if (requiredFields.some(field => !field || field.trim() === "")) {
  //   console.log("Error: Missing or empty fields detected.");
  //   throw new ApiError(400, "All fields are required");
  // }
  
  
  // Handle image upload validation
  const picturesLocalPath = req.files?.pictures[0].path;
  if (!picturesLocalPath) {
    throw new ApiError(400, "At least one book picture is required");
    
  }
  const BookPictures = await uploadOnCloudinary(picturesLocalPath);

  if(!BookPictures){
    throw new ApiError(400,"Book imge upload failed ");
  }

 


  // Upload images to Cloudinary
  // const uploadedImages = await Promise.all(
  //   pictureLocalPath.map(async (file) => await uploadOnCloudinary(file.path))
  // );

  // Check if image upload was successful
  // if (uploadedImages.some((picture) => !picture)) {
  //   throw new ApiError(400, "Book image upload failed");
  // }

  // Create a new book listing
  const newBook = await Book.create({
    bookTitle,
    author,
    year,
    ISBN,
    bookType,
    bookCondition,
    quantityAvailable,
    price,
    additionalInfo,
    sellerName,
    address,
    sellerEmail,
    sellerPhoneNumber,
    pinCode,
    picture: BookPictures.url,// Store all image URLs
  });

  // Respond with success message
  return res.status(201).json(new ApiResponse(200, "Book Listed for Sale Successfully"));
});
export { bookSelling };