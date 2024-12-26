import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    order_id: {
      type: String,
      required: true,
      unique: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the user making the order
      ref: "User",
      required: true,
    },
    book_ids: [
      {
        type: mongoose.Schema.Types.ObjectId, // References to the books in the order
        ref: "Book",
        required: true,
      },
    ],
    total_price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "shipped", "cancelled"],
      default: "pending",
    },
    shipping_address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
      country: { type: String, required: true },
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Export the Order model
export const Order = mongoose.model("Order", orderSchema);
