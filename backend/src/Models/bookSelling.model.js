import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    bookTitle: {
      type: String,
      required: true,
      trim: true,
      index:true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
      index:true,
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
    bookCondition: {
      type: String,
      enum: ["good", "fair","used"],
      required: true,
    },
    quantityAvailable:{
      type:Number,
      required:true,
    },
    price: {
      type: Number,
      required: true,
    }, 
    additionalInfo: {
      type: String,
      required: false,
    },
    genre: {
      type: String,
      required: false,
    },
   sellerName:{
    type: String,
    required:true,
    lowercase:true,
   },
   address:{
    type :String,
    required:true
   },
   sellerEmail:{
    type:String,
    required:true,

   },
   sellerPhoneNumber:{
    type:Number,
    

   },
   pinCode:{
    type:Number,
    required:true,
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
    picture: [
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