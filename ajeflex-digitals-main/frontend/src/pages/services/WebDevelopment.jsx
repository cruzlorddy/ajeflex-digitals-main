import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  ArrowRight, 
  CheckCircle,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Search,
  Layers,
  ShoppingCart,
  Database,
  Cpu,
  Monitor
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import NodesBackground from '../../components/NodesBackground';

const WebDevelopment = () => {
  const features = [
    {
      icon: Globe,
      title: 'Custom Website Design',
      description: 'Unique, responsive designs tailored to your brand identity and business goals.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Scalable online stores with secure payments, seamless checkout, and intuitive product management to drive sales and elevate your brand.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Development',
      description: 'Optimized for all devices with progressive web app capabilities.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized loading speeds and smooth user interactions across all platforms.'
    },
    {
      icon: Shield,
      title: 'Security & Reliability',
      description: 'Enterprise-grade security measures and 99.9% uptime guarantee.'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to help your website rank higher in search results.'
    },
    {
      icon: Database,
      title: 'CMS Integration',
      description: 'Easy content management systems for effortless website updates.'
    }
  ];

  // const technologies = [
  //   { name: 'React', category: 'Frontend', color: 'from-blue-400 to-blue-600' },
  //   { name: 'Next.js', category: 'Framework', color: 'from-gray-700 to-gray-900' },
  //   { name: 'Node.js', category: 'Backend', color: 'from-green-400 to-green-600' },
  //   { name: 'MongoDB', category: 'Database', color: 'from-green-500 to-green-700' },
  //   { name: 'WordPress', category: 'CMS', color: 'from-blue-500 to-blue-700' },
  //   { name: 'Shopify', category: 'E-commerce', color: 'from-green-600 to-green-800' },
  //   { name: 'Firebase', category: 'Backend', color: 'from-yellow-400 to-orange-500' },
  //   { name: 'AWS', category: 'Cloud', color: 'from-orange-400 to-orange-600' }
  // ];

  const technologies = [
  {
    category: 'Frontend',
    color: 'from-blue-400 to-blue-600',
    technologies: ['React', 'Vue.js', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    color: 'from-green-400 to-green-600',
    technologies: ['Node.js', 'Express', 'Firebase']
  },
  {
    category: 'Database',
    color: 'from-green-500 to-green-700',
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-orange-400 to-orange-600',
    technologies: ['AWS', 'Docker', 'Vercel']
  },
  {
    category: 'CMS',
    color: 'from-blue-500 to-blue-700',
    technologies: ['WordPress', 'Strapi', 'Sanity']
  },
  {
    category: 'E-commerce',
    color: 'from-green-600 to-green-800',
    technologies: ['Shopify', 'WooCommerce', 'Snipcart']
  },
  {
    category: 'Frameworks',
    color: 'from-gray-700 to-gray-900',
    technologies: ['Next.js', 'Nuxt.js', 'SvelteKit']
  }
];


  const packages = [
    {
      name: 'Starter',
      price: '$2,500',
      duration: '2-3 weeks',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Contact form',
        'Basic SEO',
        'Social media integration',
        '3 months support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,500',
      duration: '4-6 weeks',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Custom design',
        'CMS integration',
        'Advanced SEO',
        'E-commerce ready',
        'Analytics setup',
        '6 months support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,000',
      duration: '8-12 weeks',
      description: 'For large businesses and complex projects',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Advanced integrations',
        'Multi-language support',
        'Advanced security',
        'Performance optimization',
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
              <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-8">
                <Code className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Web Development</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-[0.95]">
                Custom{' '}
                <span className="gradient-text">Websites</span>
                That Convert
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                We build fast, secure, and scalable websites that not only look amazing but also drive real business results and provide exceptional user experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="btn-3d group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/portfolio" className="btn-secondary-3d">
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative w-full h-[500px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl backdrop-blur-3xl border border-white/20 flex items-center justify-center floating">
                      <div className="w-60 h-60 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                        <div className="w-32 h-32 service-icon-3d bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <Code className="w-16 h-16 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating tech icons */}
                <div className="absolute top-20 right-10 floating">
                  <div className="w-16 h-16 service-icon-3d bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-20 left-10 floating-slow">
                  <div className="w-14 h-14 service-icon-3d bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-8">
              Everything You Need for{' '}
              <span className="gradient-text">Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our web development service includes all the features you need to create a powerful online presence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className="card-3d p-8 group"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-16 h-16 service-icon-3d flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-8">
              <span className="gradient-text">Modern</span> Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest and most reliable technologies to build your website.
            </p>
          </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((stack, index) => (
            <div 
              key={index}
              className="card-3d p-6 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stack.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{stack.category}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {stack.technologies.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-8">
              Choose Your{' '}
              <span className="gradient-text">Package</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. All packages include hosting setup and SSL certificate.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`card-3d p-8 text-center relative ${
                  pkg.popular ? 'ring-2 ring-orange-500' : ''
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
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
      <section className="py-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's create a website that not only looks amazing but also drives real business results.
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
              View Examples
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;