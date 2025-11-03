import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectToDb } from "./config/db.js";
import { Message } from "./model/contactModel.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect Database
connectToDb();

// Contact form route
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    const newMessage = new Message({ firstName, lastName, email, message });
    await newMessage.save();
    console.log("💬 Message saved:", newMessage);

    res.json({ success: true, message: "Message stored successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ success: false, message: "Error saving message" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
