const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  company: {
    type: String,
    trim: true
  },
  budget: {
    type: String,
    trim: true
  },
  service: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  file: {
    type: String  // Base64 encoded file
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied'],
    default: 'new'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', ContactSchema);