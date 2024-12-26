import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required:  [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    user_id: {
      type:  mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6, // Ensures a minimum length for password
    },
    buy_sell_select: {
      type: String,
      enum: ["buy", "sell"], // Allows only 'buy' or 'sell'
      required: true,
    },
    avatar: {
      type: String,
      default: "", // Avatar URL or file path will be stored here
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Export the User model
export const User = mongoose.model("User", userSchema);
