import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
    trim: true,
    maxLength: 100,
  },
});

export const User = mongoose.model("User", userSchema); //User Collection
