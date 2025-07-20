import mongoose from 'mongoose';

const authSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: /^[0-9]{10}$/, // Only 10-digit numbers allowed
    unique: true
  },
  image: {
    type: String, // Path to the uploaded image file
    required: false
  },
  document: {
    type: String, // Path to the uploaded document file
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Auth = mongoose.model('Auth', authSchema);

export default Auth;
