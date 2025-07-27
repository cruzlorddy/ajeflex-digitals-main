import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Heart,
  Zap,
  Shield
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { mockData } from '../mock';

const About = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'We genuinely care about your success and put our heart into every project we undertake.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We stay ahead of trends and use cutting-edge technologies to deliver exceptional results.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Clear communication, honest pricing, and reliable delivery are the foundation of our relationships.'
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Every strategy, design, and line of code is crafted with your business goals in mind.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Leading digital innovation for over 8 years with expertise in strategy and business development.'
    },
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c0?w=300&h=300&fit=crop&crop=face',
      bio: 'Award-winning designer specializing in brand identity and user experience design.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer with expertise in modern web technologies and scalable architectures.'
    },
    {
      name: 'Emily Thompson',
      role: 'Social Media Strategist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
      bio: 'Social media expert who has helped brands grow their online presence and engagement.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              We're More Than a{' '}
              <span className="gradient-text">Digital Agency</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're your strategic partners in digital transformation, combining creativity, 
              technology, and data-driven insights to help your business thrive in the digital age.
            </p>
            <Link to="/contact" className="btn-primary">
              Work With Us
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="lg:flex lg:items-center lg:space-x-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2021, Ajeflex Digitals emerged from a simple belief: every business 
                  deserves exceptional digital experiences that drive real results. What started 
                  as a small team of passionate creatives and developers has grown into a 
                  full-service digital agency.
                </p>
                <p>
                  We've had the privilege of working with startups, established businesses, and 
                  everything in between. Our approach combines strategic thinking with creative 
                  execution, ensuring every project not only looks amazing but also achieves 
                  measurable business outcomes.
                </p>
                <p>
                  Today, we're proud to be trusted partners to businesses across various industries, 
                  helping them navigate the digital landscape and achieve sustainable growth.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index} 
                  className="text-center card-hover p-6 rounded-2xl border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals who bring diverse skills and fresh perspectives to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 text-center card-hover"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance customer experiences, and create lasting competitive advantages in 
                an ever-evolving digital landscape.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted digital partner for businesses worldwide, recognized 
                for our exceptional creativity, technical excellence, and unwavering commitment 
                to client success and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business and achieve your digital goals.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;