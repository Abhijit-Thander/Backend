import mongoose from "mongoose";
import { maxLength, string, trim } from "zod";

const userSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
    trim: true,
    maxLength: 100,
  },
});

export const User = mongoose.model("User", userSchema); //User Collection
