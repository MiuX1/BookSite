import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    BookTitle: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    year:{
        type:Number,
        required: true,
    },
    ISBN: {
      type: String,
      required: false,
      // unique: true,
    },
    bookType:{
      type:String,
      required:true,
    },
    price: {
      type: Number,
      required: true,
    },
    bookCondition: {
      type: String,
      enum: ["Good", "fair","used"],
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  
    seller_id: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the user selling the book
      ref: "User",
      required: false,
    },
    status: {
      type: String,
      enum: ["available", "sold"],
      default: "available",
    },
    images: [
      {
        type: String, // URLs or file paths to the book images
        required: false,
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const Book = mongoose.model("Book", bookSchema);