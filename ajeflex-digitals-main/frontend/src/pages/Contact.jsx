import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
  Upload
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage, { InlineError } from '../components/ErrorMessage';
import { useApi, useFormSubmission } from '../hooks/useApi';
import { apiService, fileToBase64 } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: '',
    file: null
  });

  const { submitForm, submitting, success, error, reset } = useFormSubmission();
  const { data: companyInfo, loading: companyLoading } = useApi(apiService.getCompanyInfo);

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ];

  const services = [
    'Web Development',
    'Graphic Design & Branding',
    'Social Media Growth',
    'SEO Optimization',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        setFormData(prev => ({
          ...prev,
          file: base64
        }));
      } catch (error) {
        console.error('File conversion error:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await submitForm(apiService.submitContactForm, formData);
    
    if (!error) {
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        service: '',
        message: '',
        file: null
      });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your digital services. Can we discuss my project?");
    window.open(`https://wa.me/2347082449901?text=${message}`, '_blank');
  };

  if (companyLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-20">
          <LoadingSpinner size="xl" />
        </div>
      </div>
    );
  }

  const company = companyInfo || {
    phone: "+1 (555) 123-4567",
    email: "Ajeflex@gmail.com",
    address: "123 Digital Avenue, Creative District, NY 10001",
    social: {
      instagram: "https://instagram.com/ajeflexdigitals",
      facebook: "https://facebook.com/ajeflexdigitals",
      twitter: "https://twitter.com/ajeflexdigitals",
      linkedin: "https://linkedin.com/company/ajeflexdigitals"
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Let's Start Something{' '}
              <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your digital presence? Get in touch and let's discuss 
              how we can help your business grow and succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="lg:flex lg:space-x-16">
            {/* Contact Form */}
            <div className="lg:w-2/3 mb-16 lg:mb-0">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Tell Us About Your Project</h2>
                
                {success ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={reset}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <InlineError error={error} showRetry={false} />
                    )}

                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          disabled={submitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 disabled:opacity-50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={submitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 disabled:opacity-50"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    {/* Company & Budget */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          disabled={submitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 disabled:opacity-50"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          disabled={submitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 disabled:opacity-50"
                        >
                          <option value="">Select Budget Range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        disabled={submitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 disabled:opacity-50"
                      >
                        <option value="">Select a Service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={submitting}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 resize-none disabled:opacity-50"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Attach Files (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors duration-200">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 mb-2">
                          Drop your files here or{' '}
                          <label className="text-orange-500 cursor-pointer hover:text-orange-600">
                            browse
                            <input
                              type="file"
                              onChange={handleFileChange}
                              disabled={submitting}
                              className="hidden"
                              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            />
                          </label>
                        </p>
                        <p className="text-sm text-gray-400">
                          PDF, DOC, JPG, PNG up to 10MB
                        </p>
                        {formData.file && (
                          <p className="text-sm text-green-600 mt-2">
                            File attached successfully
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <LoadingSpinner size="sm" className="mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-gray-600">{company.phone}</p>
                        <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-gray-600">{company.email}</p>
                        <p className="text-sm text-gray-500">We reply within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Office</h4>
                        <p className="text-gray-600">{company.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className="font-semibold text-gray-900">Quick Chat</h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    Need immediate assistance? Chat with us on WhatsApp for quick responses.
                  </p>
                  <button
                    onClick={openWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </button>
                </div>

                {/* Business Hours */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-orange-500 mr-3" />
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-3">
                    <a
                      href={company.social?.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={company.social?.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={company.social?.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={company.social?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
