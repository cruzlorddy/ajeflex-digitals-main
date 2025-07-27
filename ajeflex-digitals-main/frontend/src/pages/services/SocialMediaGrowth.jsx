import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Users,
  MessageCircle,
  Heart,
  Share2,
  BarChart3,
  Target,
  Zap,
  Calendar,
  Camera
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import NodesBackground from '../../components/NodesBackground';

const SocialMediaGrowth = () => {
  const platforms = [
    {
      name: 'Instagram',
      icon: Camera,
      color: 'from-pink-500 to-purple-500',
      description: 'Visual storytelling and community building',
      metrics: ['Followers Growth', 'Engagement Rate', 'Story Views', 'Reach & Impressions']
    },
    {
      name: 'Facebook',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      description: 'Community engagement and brand awareness',
      metrics: ['Page Likes', 'Post Engagement', 'Video Views', 'Lead Generation']
    },
    {
      name: 'Twitter',
      icon: MessageCircle,
      color: 'from-blue-400 to-blue-500',
      description: 'Real-time engagement and thought leadership',
      metrics: ['Followers Growth', 'Tweet Engagement', 'Retweets', 'Brand Mentions']
    },
    {
      name: 'LinkedIn',
      icon: Target,
      color: 'from-blue-600 to-blue-700',
      description: 'Professional networking and B2B growth',
      metrics: ['Connection Growth', 'Post Engagement', 'Profile Views', 'Lead Quality']
    }
  ];

  const services = [
    {
      icon: Calendar,
      title: 'Content Strategy & Planning',
      description: 'Comprehensive content calendars with strategic posting schedules tailored to your audience and platform algorithms.',
      features: ['Monthly Content Calendar', 'Hashtag Research', 'Competitor Analysis', 'Trend Identification']
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'High-quality visual content, graphics, and videos that engage your audience and reflect your brand identity.',
      features: ['Custom Graphics', 'Video Content', 'Photography Direction', 'Story Templates']
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Active engagement with your audience, responding to comments, messages, and building meaningful relationships.',
      features: ['Daily Engagement', 'Comment Management', 'DM Responses', 'Community Building']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Detailed performance tracking and insights to optimize your social media strategy and demonstrate ROI.',
      features: ['Monthly Reports', 'Performance Metrics', 'Growth Analysis', 'Strategy Optimization']
    }
  ];

  const growthStats = [
    { metric: '150%', label: 'Average Follower Growth', period: 'in 6 months' },
    { metric: '300%', label: 'Engagement Rate Increase', period: 'within 3 months' },
    { metric: '200%', label: 'Website Traffic Boost', period: 'from social media' },
    { metric: '50+', label: 'Successful Campaigns', period: 'across all platforms' }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$800',
      period: '/month',
      duration: '3 month minimum',
      description: 'Perfect for small businesses starting their social media journey',
      features: [
        '2 platforms management',
        '12 posts per month',
        'Basic analytics',
        'Community management',
        'Monthly strategy session',
        'Content calendar'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,500',
      period: '/month',
      duration: '6 month minimum',
      description: 'Ideal for growing businesses serious about social media',
      features: [
        '4 platforms management',
        '20 posts per month',
        'Advanced analytics',
        'Daily community management',
        'Bi-weekly strategy sessions',
        'Custom graphics & videos',
        'Influencer outreach'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$3,000',
      period: '/month',
      duration: '12 month minimum',
      description: 'Comprehensive solution for established brands',
      features: [
        'All platforms management',
        '40+ posts per month',
        'Advanced reporting',
        '24/7 community management',
        'Weekly strategy sessions',
        'Professional photography',
        'Paid advertising management',
        'Crisis management'
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
              <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-6 py-3 mb-8">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Social Media Growth</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-[0.95]">
                Grow Your{' '}
                <span className="gradient-text">Social</span>
                Presence
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Strategic social media management that builds engaged communities, increases brand awareness, and drives measurable business growth across all major platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="btn-3d group">
                  Start Growing Today
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/portfolio" className="btn-secondary-3d">
                  See Results
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative w-full h-[500px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-3xl backdrop-blur-3xl border border-white/20 flex items-center justify-center floating">
                      <div className="w-60 h-60 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center">
                        <div className="w-32 h-32 service-icon-3d bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                          <TrendingUp className="w-16 h-16 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating social icons */}
                <div className="absolute top-20 right-10 floating">
                  <div className="w-16 h-16 service-icon-3d bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-20 left-10 floating-slow">
                  <div className="w-14 h-14 service-icon-3d bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Share2 className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="absolute top-32 left-16 floating">
                  <div className="w-12 h-12 service-icon-3d bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-32 right-16 floating-slow">
                  <div className="w-18 h-18 service-icon-3d bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-9 h-9 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-8">
              We Grow Your Presence on{' '}
              <span className="gradient-text">Every Platform</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Instagram to LinkedIn, we know what works on each platform and how to maximize your growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div 
                  key={index} 
                  className="card-3d p-10 group"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{platform.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {platform.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500">
                            <BarChart3 className="w-4 h-4 text-green-500 mr-2" />
                            {metric}
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

      {/* Services Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-8">
              Complete{' '}
              <span className="gradient-text">Social Media</span> Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your social media presence.
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
                  <div className="w-16 h-16 service-icon-3d flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Growth Stats Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-8">
              Proven{' '}
              <span className="gradient-text">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data-driven approach delivers measurable growth for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthStats.map((stat, index) => (
              <div 
                key={index} 
                className="card-3d p-8 text-center group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-5xl font-black gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.metric}
                </div>
                <h3 className="text-lg font-bold mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-8">
              Growth{' '}
              <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that matches your growth goals and budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`card-3d p-8 text-center relative ${
                  pkg.popular ? 'ring-2 ring-green-500' : ''
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black gradient-text">{pkg.price}</span>
                  <span className="text-gray-600">{pkg.period}</span>
                  <p className="text-gray-600 mt-2 text-sm">{pkg.duration}</p>
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
      <section className="py-32 bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Ready to Grow Your Following?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's create a social media strategy that builds an engaged community around your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              Start Growing Now
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link 
              to="/portfolio" 
              className="border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaGrowth;