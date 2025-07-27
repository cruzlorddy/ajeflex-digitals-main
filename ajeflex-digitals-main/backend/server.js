const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

// Import models
const Contact = require('./models/Contact');
const Newsletter = require('./models/Newsletter');
const Portfolio = require('./models/Portfolio');
const Service = require('./models/Service');
const Testimonial = require('./models/Testimonial');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Helper function to convert file to base64
const fileToBase64 = (file) => {
  return `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
};

// Routes

// Root route
app.get('/api/', (req, res) => {
  res.json({ message: 'Ajeflex Digitals API is running!' });
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, budget, service, message, file } = req.body;

    // Validation
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, service, and message are required'
      });
    }

    const contact = new Contact({
      name,
      email,
      company,
      budget,
      service,
      message,
      file
    });

    await contact.save();

    res.json({
      success: true,
      message: 'Message sent successfully',
      id: contact._id
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Newsletter subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email is required'
      });
    }

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      if (existing.status === 'active') {
        return res.json({
          success: true,
          message: 'Already subscribed to newsletter'
        });
      } else {
        // Reactivate subscription
        existing.status = 'active';
        await existing.save();
        return res.json({
          success: true,
          message: 'Successfully resubscribed to newsletter'
        });
      }
    }

    const subscriber = new Newsletter({ email });
    await subscriber.save();

    res.json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Get portfolio items
app.get('/api/portfolio', async (req, res) => {
  try {
    const { category, limit } = req.query;
    let query = {};
    
    if (category) {
      query.category = category;
    }

    let portfolioQuery = Portfolio.find(query).sort({ order: 1, createdAt: -1 });
    
    if (limit) {
      portfolioQuery = portfolioQuery.limit(parseInt(limit));
    }

    const portfolio = await portfolioQuery;

    res.json({
      success: true,
      data: portfolio
    });
  } catch (error) {
    console.error('Portfolio fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Get services
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find({ active: true }).sort({ order: 1 });

    res.json({
      success: true,
      data: services
    });
  } catch (error) {
    console.error('Services fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Get testimonials
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ order: 1, createdAt: -1 });

    res.json({
      success: true,
      data: testimonials
    });
  } catch (error) {
    console.error('Testimonials fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Get company information
app.get('/api/company', async (req, res) => {
  try {
    const companyInfo = {
      name: "Ajeflex Digitals",
      tagline: "We Build Brands, Websites, and Digital Growth Engines.",
      subtitle: "Custom websites. Beautiful design. Social growth that scales.",
      phone: "+1 (555) 123-4567",
      email: "hello@ajeflexdigitals.com",
      address: "123 Digital Avenue, Creative District, NY 10001",
      social: {
        instagram: "https://instagram.com/ajeflexdigitals",
        facebook: "https://facebook.com/ajeflexdigitals",
        twitter: "https://twitter.com/ajeflexdigitals",
        linkedin: "https://linkedin.com/company/ajeflexdigitals"
      }
    };

    res.json({
      success: true,
      data: companyInfo
    });
  } catch (error) {
    console.error('Company info fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Get all contacts (admin only)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Contacts fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});