import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    image: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema); //User Collection
