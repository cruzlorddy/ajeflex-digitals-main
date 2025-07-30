import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Palette, 
  TrendingUp, 
  ArrowRight, 
  Star,
  CheckCircle,
  Zap,
  Target,
  Users
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NodesBackground from '../components/NodesBackground';
import { mockData } from '../mock';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === mockData.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Filter portfolio items
  const filteredPortfolio = activeFilter === 'All' 
    ? mockData.portfolio.slice(0, 6)
    : mockData.portfolio.filter(item => item.category === activeFilter).slice(0, 6);

  const getServiceIcon = (iconName) => {
    const icons = {
      Code: Code,
      Palette: Palette,
      TrendingUp: TrendingUp
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  const getServiceLink = (title) => {
    const links = {
      'Web Development': '/services/web-development',
      'Graphic Design': '/services/graphic-design',
      'Social Media Growth': '/services/social-media-growth'
    };
    return links[title] || '/services';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <NodesBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="hero-mesh"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center min-h-[85vh]">
            {/* Left Content */}
            <div className="lg:w-1/2 lg:pr-20 mb-16 lg:mb-0 relative z-10">
              <div className="fade-in-up">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Available for new projects</span>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-[0.95]">
                  We Build{' '}
                  <span className="gradient-text block">Digital</span>
                  Experiences That{' '}
                  <span className="gradient-text">Convert</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
                  Custom websites, stunning brands, and social growth strategies that turn your vision into measurable business results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link to="/contact" className="btn-3d group">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/portfolio" className="btn-secondary-3d group">
                    View Our Work
                    <Target className="w-5 h-5 ml-3 transition-transform group-hover:rotate-12" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content - Modern 3D Elements */}
            <div className="lg:w-1/2 relative">
              <div className="relative w-full h-[600px]">
                {/* Floating 3D shapes */}
                <div className="absolute top-20 left-10 w-32 h-32 floating">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl opacity-20 transform rotate-12 service-icon-3d"></div>
                </div>
                
                <div className="absolute top-32 right-20 w-24 h-24 floating-slow">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-30 transform -rotate-12 service-icon-3d"></div>
                </div>
                
                <div className="absolute bottom-32 left-20 w-20 h-20 floating">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-25 service-icon-3d"></div>
                </div>
                
                <div className="absolute bottom-20 right-16 w-28 h-28 floating-slow">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl opacity-20 transform rotate-45 service-icon-3d"></div>
                </div>
                
                {/* Central hero element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-full backdrop-blur-3xl border border-white/20 flex items-center justify-center">
                      <div className="w-60 h-60 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                        <div className="w-40 h-40 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center service-icon-3d">
                          {/* <Zap className="w-16 h-16 text-white" /> */}
                           <img
                            src="ajaflexwwww.png"
                            alt="Ajeflex Logo"
                            className="w-38 h-38 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-orange-50 rounded-full px-6 py-3 mb-8">
              <Users className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-5xl font-black mb-8">
              Everything You Need to{' '}
              <span className="gradient-text">Succeed Online</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine strategy, design, and technology to create digital experiences that drive real business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {mockData.services.map((service, index) => (
              <div 
                key={service.id} 
                className="card-3d p-10 text-center group relative overflow-hidden"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="grid-bg h-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 service-icon-3d flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                    <div className="text-white">
                      {getServiceIcon(service.icon)}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-10">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={getServiceLink(service.title)}
                    className="btn-3d group w-full"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-8">
              <Target className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Process</span>
            </div>
            <h2 className="text-5xl font-black mb-8">
              From Concept to{' '}
              <span className="gradient-text">Launch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures every project delivers exceptional results.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line with nodes */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-20 bottom-20">
              <div className="node-connection w-0.5 h-full"></div>
              {mockData.process.map((_, index) => (
                <div 
                  key={index}
                  className="node-dot absolute left-1/2 transform -translate-x-1/2"
                  style={{ top: `${(index / (mockData.process.length - 1)) * 100}%` }}
                ></div>
              ))}
            </div>

            {mockData.process.map((step, index) => (
              <div key={step.step} className={`flex items-center mb-20 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                <div className="lg:w-1/2 lg:px-12">
                  <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="card-3d p-8 inline-block">
                      <div className="flex items-center mb-6 justify-center lg:justify-start">
                        <div className="w-16 h-16 service-icon-3d flex items-center justify-center text-white font-bold text-xl mr-4">
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-50 rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Our Work</span>
            </div>
            <h2 className="text-5xl font-black mb-8">
              Projects That{' '}
              <span className="gradient-text">Deliver Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              See how we've helped businesses transform their digital presence and achieve measurable growth.
            </p>

            {/* Modern Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['All', 'Web', 'Branding', 'Social'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-modern ${activeFilter === filter ? 'active' : ''}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project, index) => (
              <div 
                key={project.id} 
                className="card-3d group cursor-pointer overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span className="inline-block bg-orange-500 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <h4 className="text-lg font-bold">{project.title}</h4>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/portfolio" className="btn-3d group">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-8">
              What Our Clients{' '}
              <span className="gradient-text">Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real results from real businesses.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="testimonial-modern p-12 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-12">
                  <img
                    src={mockData.testimonials[currentTestimonial].avatar}
                    alt={mockData.testimonials[currentTestimonial].name}
                    className="w-32 h-32 rounded-full mx-auto lg:mx-0 object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="lg:w-2/3 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                    "{mockData.testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {mockData.testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-600">
                      {mockData.testimonials[currentTestimonial].role}, {mockData.testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-12 space-x-3">
              {mockData.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-orange-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's transform your vision into a digital experience that drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              Start Your Project
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link 
              to="/portfolio" 
              className="border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
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

export default Home;