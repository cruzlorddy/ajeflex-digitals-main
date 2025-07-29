import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  ArrowRight, 
  CheckCircle,
  Image,
  Layers,
  Pen,
  Eye,
  Target,
  Sparkles,
  Brush,
  Camera,
  Layout
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import NodesBackground from '../../components/NodesBackground';

const GraphicDesign = () => {
  const services = [
    {
      icon: Target,
      title: 'Brand Identity Design',
      description: 'Complete brand identity systems including logos, color palettes, typography, and brand guidelines.',
      deliverables: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography System']
    },
    {
      icon: Layout,
      title: 'Print Design',
      description: 'Professional print materials that make a lasting impression on your customers and stakeholders.',
      deliverables: ['Business Cards', 'Brochures', 'Flyers', 'Packaging Design']
    },
    {
      icon: Image,
      title: 'Digital Graphics',
      description: 'Eye-catching digital assets optimized for web, social media, and digital marketing campaigns.',
      deliverables: ['Social Media Graphics', 'Web Banners', 'Email Templates', 'Digital Ads']
    },
    {
      icon: Camera,
      title: 'Marketing Materials',
      description: 'Compelling marketing collateral that communicates your message and drives customer action.',
      deliverables: ['Presentation Design', 'Infographics', 'Posters', 'Trade Show Materials']
    }
  ];

  const designProcess = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'We start by understanding your brand, target audience, competitors, and project goals through detailed research and consultation.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Based on our research, we develop multiple creative concepts and design directions that align with your brand vision.',
      icon: Sparkles
    },
    {
      step: '03',
      title: 'Design Creation',
      description: 'We create detailed designs using industry-standard tools, focusing on aesthetics, functionality, and brand consistency.',
      icon: Brush
    },
    {
      step: '04',
      title: 'Refinement & Delivery',	
      description: 'After your feedback, we refine the designs to perfection and deliver all final files in various formats for different uses.',
      icon: CheckCircle
    }
  ];

  const portfolioSamples = [
    {
      title: 'Tech Startup Branding',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
      category: 'Brand Identity'
    },
    {
      title: 'Restaurant Menu Design',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      category: 'Print Design'
    },
    {
      title: 'Social Media Campaign',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      category: 'Digital Graphics'
    },
    {
      title: 'Fashion Brand Package',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      category: 'Brand Identity'
    }
  ];

  const packages = [
    {
      name: 'Logo Design',
      price: '$1,200',
      duration: '1-2 weeks',
      description: 'Perfect for new businesses needing a professional logo',
      features: [
        '3 initial concepts',
        '3 revision rounds',
        'Final logo in multiple formats',
        'Basic brand guidelines',
        'Social media versions',
        'Copyright ownership'
      ],
      popular: false
    },
    {
      name: 'Brand Identity',
      price: '$3,500',
      duration: '3-4 weeks',
      description: 'Complete brand identity system for growing businesses',
      features: [
        'Logo design & variations',
        'Color palette & typography',
        'Brand guidelines document',
        'Business card design',
        'Letterhead design',
        'Social media kit',
        '6 months support'
      ],
      popular: true
    },
    {
      name: 'Brand Package',
      price: '$7,500',
      duration: '6-8 weeks',
      description: 'Comprehensive branding solution for established businesses',
      features: [
        'Complete brand identity',
        'Marketing materials design',
        'Website design mockups',
        'Brand strategy consultation',
        'Brand photography direction',
        'Packaging design concepts',
        '12 months support'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <NodesBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 grid-bg overflow-hidden">
        <div className="hero-mesh"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
              <div className="inline-flex items-center space-x-2 bg-pink-50 rounded-full px-6 py-3 mb-8">
                <Palette className="w-5 h-5 text-pink-500" />
                <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Graphic Design</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-[0.95]">
                Visual{' '}
                <span className="gradient-text">Identity</span>
                That Speaks
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                We create compelling visual identities and design assets that capture your brand essence and connect with your target audience on an emotional level.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="btn-3d group">
                  Start Your Design
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/portfolio" className="btn-secondary-3d">
                  View Gallery
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative w-full h-[500px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full backdrop-blur-3xl border border-white/20 flex items-center justify-center floating">
                      <div className="w-60 h-60 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                        <div className="w-32 h-32 service-icon-3d bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Palette className="w-16 h-16 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating design icons */}
                <div className="absolute top-20 right-10 floating">
                  <div className="w-16 h-16 service-icon-3d bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <Pen className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-20 left-10 floating-slow">
                  <div className="w-14 h-14 service-icon-3d bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Brush className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="absolute top-32 left-16 floating">
                  <div className="w-12 h-12 service-icon-3d bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6 text-white" />
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
            <h2 className="text-5xl font-black mb-8">
              Complete{' '}
              <span className="gradient-text">Design</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From brand identity to marketing materials, we provide comprehensive design services that elevate your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="card-3d p-10 group"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 service-icon-3d flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-8">
              Our Creative{' '}
              <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every great design starts with understanding. Here's how we bring your vision to life.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {designProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index}
                  className={`flex items-center mb-16 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="lg:w-1/2 lg:px-8">
                    <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="card-3d p-8 inline-block">
                        <div className="flex items-center mb-6 justify-center lg:justify-start">
                          <div className="w-16 h-16 service-icon-3d flex items-center justify-center text-white font-bold text-lg mr-4">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-gray-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-1/2">
                    {/* Connection line */}
                    <div className="flex justify-center">
                      <div className="node-connection w-32 h-0.5"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Samples */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-8">
              Design{' '}
              <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent design work across different industries.
            </p>
            touch images to see details 
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioSamples.map((sample, index) => (
              <div 
                key={index} 
                className="card-3d group cursor-pointer overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span className="inline-block bg-pink-500 px-2 py-1 rounded-full text-xs font-medium mb-2">
                      {sample.category}
                    </span>
                    <h4 className="text-sm font-bold">{sample.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/portfolio" className="btn-3d group">
              View Full Portfolio
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-8">
              Design{' '}
              <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your design needs and budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`card-3d p-8 text-center relative ${
                  pkg.popular ? 'ring-2 ring-pink-500' : ''
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black gradient-text">{pkg.price}</span>
                  <p className="text-gray-600 mt-2">{pkg.duration}</p>
                </div>
                
                <p className="text-gray-600 mb-8">{pkg.description}</p>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  className={pkg.popular ? 'btn-3d w-full' : 'btn-secondary-3d w-full'}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Ready to Create Your Brand?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's design a visual identity that perfectly represents your business and connects with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              Start Your Design
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link 
              to="/portfolio" 
              className="border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              View Examples
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GraphicDesign;