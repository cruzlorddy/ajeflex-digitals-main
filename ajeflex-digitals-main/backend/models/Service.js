const mongoose = require('mongoose');

const PricingSchema = new mongoose.Schema({
  price: String,
  features: [String]
}, { _id: false });

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  icon: {
    type: String,
    required: true,
    trim: true
  },
  features: [{
    type: String,
    trim: true
  }],
  pricing: {
    starter: PricingSchema,
    professional: PricingSchema,
    enterprise: PricingSchema
  },
  order: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', ServiceSchema);