const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Web', 'Branding', 'Social'],
    trim: true
  },
  image: {
    type: String,  // Base64 encoded image
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  client: {
    type: String,
    trim: true
  },
  year: {
    type: String,
    trim: true
  },
  technologies: [{
    type: String,
    trim: true
  }],
  results: [{
    type: String,
    trim: true
  }],
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);