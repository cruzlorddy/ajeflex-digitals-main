import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink,
  ArrowRight,
  Filter,
  Calendar,
  User,
  Tag
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { mockData } from '../mock';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredPortfolio = activeFilter === 'All' 
    ? mockData.portfolio 
    : mockData.portfolio.filter(item => item.category === activeFilter);

  const filters = ['All', 'Web', 'Branding', 'Social'];

  const projectDetails = {
    1: {
      client: 'TechFlow Solutions',
      duration: '6 weeks',
      year: '2024',
      challenge: 'Create a modern, data-driven dashboard that helps businesses visualize their performance metrics.',
      solution: 'Developed a responsive SaaS dashboard with real-time analytics, custom charts, and intuitive user interface.',
      results: ['40% increase in user engagement', '25% reduction in bounce rate', 'Improved user satisfaction scores'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js']
    },
    2: {
      client: 'Luxe Fashion House',
      duration: '8 weeks',
      year: '2024',
      challenge: 'Rebrand a luxury fashion company to appeal to modern, sophisticated consumers.',
      solution: 'Created a complete brand identity system including logo, typography, color palette, and brand guidelines.',
      results: ['300% increase in brand recognition', 'Improved premium positioning', '150% growth in social media engagement'],
      technologies: ['Adobe Creative Suite', 'Figma', 'Brand Guidelines']
    },
    3: {
      client: 'Bella Vista Restaurant',
      duration: '4 months',
      year: '2024',
      challenge: 'Increase foot traffic and online orders through strategic social media marketing.',
      solution: 'Implemented a comprehensive social media strategy with engaging content and targeted advertising.',
      results: ['500% increase in Instagram followers', '200% growth in online orders', 'Expanded customer base by 60%'],
      technologies: ['Meta Business', 'Instagram Creator Studio', 'Analytics Tools']
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore our recent work and see how we've helped businesses achieve 
              their digital goals through innovative design and development.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full transition-all duration-200 font-medium ${
                    activeFilter === filter
                      ? 'filter-active shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project, index) => (
              <div 
                key={project.id} 
                className="card-hover group cursor-pointer"
                onClick={() => openProjectModal(project)}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-blue-500 text-white text-sm rounded-full font-medium">
                        {project.category}
                      </span>
                      <span className="text-gray-400 text-sm">2024</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center text-orange-500 font-medium text-sm group-hover:text-orange-600 transition-colors duration-200">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. See how our solutions have helped businesses grow and succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl card-hover">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2024</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 lg:h-80 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-blue-500 text-white text-sm rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {projectDetails[selectedProject.id] && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-orange-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Client</p>
                        <p className="font-semibold">{projectDetails[selectedProject.id].client}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-orange-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-semibold">{projectDetails[selectedProject.id].duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-5 h-5 text-orange-500 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Year</p>
                        <p className="font-semibold">{projectDetails[selectedProject.id].year}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Challenge</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {projectDetails[selectedProject.id].challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Solution</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {projectDetails[selectedProject.id].solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Results</h3>
                    <ul className="space-y-2">
                      {projectDetails[selectedProject.id].results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <ArrowRight className="w-4 h-4 text-green-500 mr-3" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {projectDetails[selectedProject.id].technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your project.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;