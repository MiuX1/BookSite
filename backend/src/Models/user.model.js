import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true, // Mandatory during registration
    },
    bio: {
      type: String,
      default: '', // Optional, with default as empty
    },
    location: {
      type: String,
      default: '', // Optional, with default as empty
    },
    phone: {
      type: String,
      required: true, // Mandatory field
      unique: true,  // Ensure phone numbers are unique
      trim: true,
    },
    isSeller: {
      type: Boolean,
      default: false, // Default to false, can be updated later if the user becomes a seller
    },
    avatar: 
      {
        type: String, // URLs or file paths to the book images
        required: true,
      },
    refreshToken: {
            type: String
        },
    // Wishlist (to be added later)
    // wishlist: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Book',  // Reference to the Book model
    // }],
    
    // Book Listings (to be added later)
    // bookListings: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Book',  // Reference to the Book model
    // }],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

userSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10)
  next()
})

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          email: this.email,
          username: this.username,
          fullName: this.fullName
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
  )
}
userSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
          expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
  )
}

// Export the User model
export const User = mongoose.model("User", userSchema);
