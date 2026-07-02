import { createServerFn } from "@tanstack/react-start";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

// Connect to MongoDB using the URI strictly from the .env file
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  
  // Force strict loading of the .env file (bypasses Vite caching)
  dotenv.config();
  const uri = process.env.MONGODB_URI;
  
  if (!uri || uri.includes("xxxxx")) {
    throw new Error(
      "Missing or invalid MONGODB_URI environment variable."
    );
  }
  await mongoose.connect(uri);
};

// Define the Schema for a contact submission
const ContactSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: false },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Prevent Mongoose from recompiling the model upon hot-reloads
const ContactModel = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

// Create a secure server function (API) to handle form submissions
export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: { fullname: string; email: string; company: string; message: string }) => data)
  .handler(async ({ data }) => {
    try {
      await connectDB();
      const newContact = new ContactModel({
        fullname: data.fullname,
        email: data.email,
        company: data.company,
        message: data.message,
      });
      await newContact.save();
      return { success: true };
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to save submission");
    }
  });
