import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

export const Message = mongoose.model('Message', messageSchema);
