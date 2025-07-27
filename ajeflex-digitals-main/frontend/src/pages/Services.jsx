import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Palette, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Search,
  Zap,
  Users,
  BarChart,
  Globe,
  Layers
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { mockData } from '../mock';

const Services = () => {
  const detailedServices = [
    {
      id: 1,
      title: 'Web Development',
      subtitle: 'Custom websites that convert visitors into customers',
      icon: Code,
      color: 'from-blue-500 to-purple-500',
      description: 'We build responsive, fast-loading websites using modern technologies that provide exceptional user experiences and drive business results.',
      features: [
        'Custom Website Design',
        'E-commerce Development',
        'Content Management Systems',
        'Progressive Web Apps',
        'API Integration',
        'Performance Optimization',
        'Mobile Optimization',
        'SEO Implementation'
      ],
      technologies: ['React', 'Node.js', 'WordPress', 'Shopify', 'Next.js'],
      pricing: 'Starting from $2,500'
    },
    {
      id: 2,
      title: 'Graphic Design & Branding',
      subtitle: 'Visual identity that makes your brand unforgettable',
      icon: Palette,
      color: 'from-pink-500 to-red-500',
      description: 'From logo design to complete brand identity systems, we create visually compelling designs that communicate your brand values and attract your target audience.',
      features: [
        'Logo Design & Brand Identity',
        'Business Card & Stationery',
        'Website & UI Design',
        'Social Media Graphics',
        'Print Design Materials',
        'Brand Guidelines',
        'Packaging Design',
        'Marketing Collateral'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'InDesign'],
      pricing: 'Starting from $1,200'
    },
    {
      id: 3,
      title: 'Social Media Growth',
      subtitle: 'Strategic growth across all major platforms',
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500',
      description: 'We help businesses build engaged communities and drive measurable growth across Instagram, Facebook, Twitter, LinkedIn, and other social platforms.',
      features: [
        'Content Strategy & Creation',
        'Account Management',
        'Community Engagement',
        'Influencer Partnerships',
        'Social Media Advertising',
        'Analytics & Reporting',
        'Brand Monitoring',
        'Crisis Management'
      ],
      technologies: ['Meta Business', 'LinkedIn Ads', 'Twitter Ads', 'Analytics Tools'],
      pricing: 'Starting from $800/month'
    }
  ];

  const additionalServices = [
    { icon: Search, title: 'SEO Optimization', description: 'Improve your search rankings' },
    { icon: Smartphone, title: 'Mobile App Development', description: 'Native & cross-platform apps' },
    { icon: BarChart, title: 'Digital Marketing', description: 'PPC, email & content marketing' },
    { icon: Globe, title: 'Domain & Hosting', description: 'Reliable hosting solutions' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Digital Solutions That{' '}
              <span className="gradient-text">Drive Results</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From custom websites to comprehensive social media strategies, we offer the complete 
              digital toolkit your business needs to succeed online.
            </p>
            <Link to="/contact" className="btn-primary">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {detailedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className={`lg:flex lg:items-center lg:space-x-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className="lg:w-1/2 mb-12 lg:mb-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-xl text-gray-600 mb-6">{service.subtitle}</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies We Use:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{service.pricing}</p>
                        <p className="text-gray-600 text-sm">Custom quotes available</p>
                      </div>
                      <Link to="/contact" className="btn-primary">
                        Get Quote
                      </Link>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <div className={`w-full h-80 bg-gradient-to-r ${service.color} rounded-2xl opacity-10`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="w-32 h-32 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We also offer specialized services to complement your digital strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl card-hover text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures every project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {mockData.process.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                    {step.step}
                  </div>
                  {index < mockData.process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-blue-500 opacity-30"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our services and process.
              </p>
            </div>

            <div className="space-y-6">
              {mockData.faq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/portfolio" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;