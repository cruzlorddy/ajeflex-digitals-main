import React, { useState } from 'react';
import { 
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target,
  Zap,
  Rocket,
  Calendar,
  DollarSign,
  Globe,
  Palette,
  Code,
  TrendingUp,
  Star,
  Play,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectType, setProjectType] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    goals: '',
    targetAudience: '',
    currentWebsite: '',
    competitors: '',
    preferences: ''
  });
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const steps = [
    { id: 1, title: 'Project Type', icon: Target },
    { id: 2, title: 'Timeline & Budget', icon: Clock },
    { id: 3, title: 'Project Details', icon: Users },
    { id: 4, title: 'Launch Strategy', icon: Rocket }
  ];

  const projectTypes = [
    {
      id: 'website',
      title: 'Website Development',
      description: 'Custom websites that convert visitors into customers',
      icon: Globe,
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First'],
      timeline: '2-6 weeks',
      startingPrice: '$2,500'
    },
    {
      id: 'branding',
      title: 'Brand Design',
      description: 'Complete brand identity that stands out',
      icon: Palette,
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Social Assets'],
      timeline: '1-3 weeks',
      startingPrice: '$1,500'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Store',
      description: 'Online stores that drive sales and growth',
      icon: Code,
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Analytics'],
      timeline: '4-8 weeks',
      startingPrice: '$5,000'
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      description: 'Social media growth and marketing campaigns',
      icon: TrendingUp,
      features: ['Social Media Management', 'Content Creation', 'Ad Campaigns', 'Analytics'],
      timeline: 'Ongoing',
      startingPrice: '$1,200/month'
    }
  ];

  const timelines = [
    { id: 'asap', label: 'ASAP (Rush Job)', description: 'Need it done within 1-2 weeks', multiplier: 1.5 },
    { id: 'month', label: '1 Month', description: 'Standard timeline for most projects', multiplier: 1 },
    { id: '2months', label: '2-3 Months', description: 'Flexible timeline, best value', multiplier: 0.9 },
    { id: 'flexible', label: 'Flexible', description: 'No specific deadline', multiplier: 0.8 }
  ];

  const budgets = [
    { id: 'startup', label: '$1,000 - $5,000', description: 'Perfect for startups and small businesses' },
    { id: 'growing', label: '$5,000 - $15,000', description: 'Ideal for growing businesses' },
    { id: 'established', label: '$15,000 - $50,000', description: 'For established companies' },
    { id: 'enterprise', label: '$50,000+', description: 'Enterprise-level solutions' }
  ];

  const faqs = [
    {
      question: "How long does it take to get started?",
      answer: "Once you complete this form, we'll schedule a discovery call within 24 hours. Most projects begin within 1 week of the initial consultation."
    },
    {
      question: "What's included in the project cost?",
      answer: "All our projects include design, development, testing, launch support, and 30 days of post-launch support. Additional features can be discussed during consultation."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! We work with clients worldwide. We're experienced in managing projects across different time zones and communication preferences."
    },
    {
      question: "Can I make changes during the project?",
      answer: "Absolutely! We include 2-3 revision rounds in all projects. Additional changes can be accommodated with transparent pricing."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    // Here you would typically send the data to your backend
    console.log('Project Data:', {
      projectType,
      timeline,
      budget,
      ...formData
    });
  };

  const getSelectedProject = () => {
    return projectTypes.find(p => p.id === projectType);
  };

  const getEstimatedCost = () => {
    const project = getSelectedProject();
    const timelineData = timelines.find(t => t.id === timeline);
    
    if (!project || !timelineData) return null;
    
    const basePrice = parseInt(project.startingPrice.replace(/[^0-9]/g, ''));
    return Math.round(basePrice * timelineData.multiplier);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white  items-center justify-center">
        <Navigation />
        <div className=" pt-24 pb-8 max-w-2xl mx-auto text-center p-8">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c50c2b' }}>
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-6">We're Excited to Work With You!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for choosing us for your project. We'll review your information and get back to you within 24 hours with next steps.
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="font-bold mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: '#c50c2b' }}>1</div>
                <span>We'll review your project requirements</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: '#c50c2b' }}>2</div>
                <span>Schedule a discovery call within 24 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: '#c50c2b' }}>3</div>
                <span>Create a detailed project proposal</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: '#c50c2b' }}>4</div>
                <span>Begin your project within 1 week</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setShowSuccess(false)}
            className="px-8 py-4 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: '#c50c2b' }}
          >
            Start Another Project
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
  
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Navigation />
      {/* Header */}
      <div className="pt-24 pb-8 bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className='block'>
              <h1 className="text-3xl font-bold block">Get Started</h1>
              <p className="text-gray-600">Let's bring your vision to life</p>
            </div>
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step.id 
                      ? 'text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`} style={currentStep >= step.id ? { backgroundColor: '#c50c2b' } : {}}>
                    {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-1 mx-2 ${
                      currentStep > step.id ? 'bg-red-600' : 'bg-gray-200'
                    }`} style={currentStep > step.id ? { backgroundColor: '#c50c2b' } : {}}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">What can we help you with?</h2>
                <p className="text-xl text-gray-600">Choose the service that best fits your needs</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {projectTypes.map((project) => {
                  const IconComponent = project.icon;
                  return (
                    <div
                      key={project.id}
                      onClick={() => setProjectType(project.id)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        projectType === project.id 
                          ? 'border-red-600 bg-red-50' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          projectType === project.id ? 'text-white' : 'text-gray-600'
                        }`} style={projectType === project.id ? { backgroundColor: '#c50c2b' } : { backgroundColor: '#f3f4f6' }}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-gray-600 mb-4">{project.description}</p>
                          
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {project.features.map((feature) => (
                              <div key={feature} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Timeline: {project.timeline}</span>
                            <span className="font-bold" style={{ color: '#c50c2b' }}>From {project.startingPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Timeline & Budget */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Timeline & Budget</h2>
                <p className="text-xl text-gray-600">Help us understand your project constraints</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Timeline */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">When do you need this completed?</h3>
                  <div className="space-y-4">
                    {timelines.map((time) => (
                      <div
                        key={time.id}
                        onClick={() => setTimeline(time.id)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          timeline === time.id 
                            ? 'border-red-600 bg-red-50' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold">{time.label}</h4>
                            <p className="text-gray-600 text-sm">{time.description}</p>
                          </div>
                          {time.multiplier !== 1 && (
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                              time.multiplier > 1 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                            }`}>
                              {time.multiplier > 1 ? `+${Math.round((time.multiplier - 1) * 100)}%` : `${Math.round((1 - time.multiplier) * 100)}% Off`}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">What's your budget range?</h3>
                  <div className="space-y-4">
                    {budgets.map((budgetOption) => (
                      <div
                        key={budgetOption.id}
                        onClick={() => setBudget(budgetOption.id)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          budget === budgetOption.id 
                            ? 'border-red-600 bg-red-50' 
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <h4 className="font-bold">{budgetOption.label}</h4>
                        <p className="text-gray-600 text-sm">{budgetOption.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cost Estimate */}
              {projectType && timeline && (
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Estimated Project Cost</h3>
                  <div className="text-3xl font-black mb-2" style={{ color: '#c50c2b' }}>
                    ${getEstimatedCost()?.toLocaleString()}
                  </div>
                  <p className="text-gray-600 text-sm">
                    Based on your {getSelectedProject()?.title.toLowerCase()} project with {timelines.find(t => t.id === timeline)?.label.toLowerCase()} timeline
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Project Details */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Tell us about your project</h2>
                <p className="text-xl text-gray-600">The more details you provide, the better we can help you</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Business/Project Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': '#c50c2b' }}
                      placeholder="Your Business Name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Industry
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': '#c50c2b' }}
                      placeholder="e.g., Healthcare, E-commerce, Tech"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-bold mb-2">
                    Project Goals *
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                    style={{ '--tw-ring-color': '#c50c2b' }}
                    placeholder="What do you want to achieve with this project? What problems are you trying to solve?"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-bold mb-2">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ '--tw-ring-color': '#c50c2b' }}
                    placeholder="Who is your ideal customer?"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Current Website (if any)
                    </label>
                    <input
                      type="url"
                      name="currentWebsite"
                      value={formData.currentWebsite}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': '#c50c2b' }}
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Competitors
                    </label>
                    <input
                      type="text"
                      name="competitors"
                      value={formData.competitors}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      style={{ '--tw-ring-color': '#c50c2b' }}
                      placeholder="Who are your main competitors?"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-bold mb-2">
                    Design Preferences & Additional Notes
                  </label>
                  <textarea
                    name="preferences"
                    value={formData.preferences}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                    style={{ '--tw-ring-color': '#c50c2b' }}
                    placeholder="Any specific design preferences, colors, styles, or additional requirements?"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Launch Strategy */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Ready to Launch?</h2>
                <p className="text-xl text-gray-600">Review your project details and let's get started</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Project Summary</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900">Project Type</h4>
                      <p className="text-gray-600">{getSelectedProject()?.title}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Timeline</h4>
                      <p className="text-gray-600">{timelines.find(t => t.id === timeline)?.label}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Budget Range</h4>
                      <p className="text-gray-600">{budgets.find(b => b.id === budget)?.label}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Estimated Cost</h4>
                      <p className="text-2xl font-bold" style={{ color: '#c50c2b' }}>
                        ${getEstimatedCost()?.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900">Business Name</h4>
                      <p className="text-gray-600">{formData.businessName || 'Not specified'}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Industry</h4>
                      <p className="text-gray-600">{formData.industry || 'Not specified'}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Target Audience</h4>
                      <p className="text-gray-600">{formData.targetAudience || 'Not specified'}</p>
                    </div>
                  </div>
                </div>

                {formData.goals && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">Project Goals</h4>
                    <p className="text-gray-600">{formData.goals}</p>
                  </div>
                )}
              </div>

              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="px-12 py-4 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  style={{ backgroundColor: '#c50c2b' }}
                >
                  <Rocket className="w-6 h-6 mr-3 inline" />
                  Launch My Project
                </button>
                <p className="text-gray-600 mt-4">
                  We'll get back to you within 24 hours with next steps
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                currentStep === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous Step
            </button>

            {currentStep < 4 && (
              <button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !projectType) ||
                  (currentStep === 2 && (!timeline || !budget)) ||
                  (currentStep === 3 && !formData.businessName)
                }
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  (currentStep === 1 && !projectType) ||
                  (currentStep === 2 && (!timeline || !budget)) ||
                  (currentStep === 3 && !formData.businessName)
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'text-white hover:shadow-lg'
                }`}
                style={(currentStep === 1 && projectType) ||
                      (currentStep === 2 && timeline && budget) ||
                      (currentStep === 3 && formData.businessName) 
                        ? { backgroundColor: '#c50c2b' } : {}}
              >
                Next Step
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="font-bold text-gray-900">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetStarted;



























// import React, { useState } from 'react';
// import { 
//   ArrowRight,
//   CheckCircle,
//   Clock,
//   Users,
//   Target,
//   Zap,
//   Rocket,
//   Calendar,
//   DollarSign,
//   Globe,
//   Palette,
//   Code,
//   TrendingUp,
//   Star,
//   Play,
//   ChevronDown,
//   ChevronUp,
//   Send,
//   Shield,
//   Award,
//   MessageCircle
// } from 'lucide-react';

// // Import placeholders for Navigation and Footer
// import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';




// const GetStarted = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [projectType, setProjectType] = useState('');
//   const [timeline, setTimeline] = useState('');
//   const [budget, setBudget] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [formData, setFormData] = useState({
//     // Contact Information
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     company: '',
    
//     // Business Information
//     businessName: '',
//     industry: '',
//     companySize: '',
//     website: '',
    
//     // Project Information
//     goals: '',
//     targetAudience: '',
//     competitors: '',
//     preferences: '',
//     additionalServices: [],
//     urgencyReason: '',
    
//     // Technical Requirements
//     platformPreference: '',
//     integrations: [],
//     contentReady: '',
//     hostingPreference: '',
    
//     // Communication Preferences
//     preferredContact: 'email',
//     timezone: '',
//     bestTimeToCall: '',
//     projectStartDate: '',
    
//     // Legal & Compliance
//     gdprCompliance: false,
//     accessibilityRequirements: false,
//     termsAccepted: false,
//     marketingConsent: false
//   });
//   const [expandedFaq, setExpandedFaq] = useState(null);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const steps = [
//     { id: 1, title: 'Service Selection', icon: Target, description: 'Choose your project type' },
//     { id: 2, title: 'Timeline & Budget', icon: Clock, description: 'Set your constraints' },
//     { id: 3, title: 'Contact Information', icon: Users, description: 'Your details' },
//     { id: 4, title: 'Project Details', icon: Code, description: 'Project specifics' },
//     { id: 5, title: 'Review & Submit', icon: Rocket, description: 'Launch your project' }
//   ];

//   const projectTypes = [
//     {
//       id: 'website',
//       title: 'Website Development',
//       description: 'Custom websites that convert visitors into customers',
//       icon: Globe,
//       features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First', 'Content Management', 'Analytics Integration'],
//       timeline: '2-6 weeks',
//       startingPrice: 2500,
//       recommended: true
//     },
//     {
//       id: 'branding',
//       title: 'Brand Design & Identity',
//       description: 'Complete brand identity that stands out from competition',
//       icon: Palette,
//       features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Social Assets', 'Brand Strategy', 'Print Materials'],
//       timeline: '1-3 weeks',
//       startingPrice: 1500,
//       recommended: false
//     },
//     {
//       id: 'ecommerce',
//       title: 'E-commerce Store',
//       description: 'Online stores that drive sales and maximize revenue',
//       icon: Code,
//       features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Analytics', 'Multi-currency', 'Mobile Commerce'],
//       timeline: '4-8 weeks',
//       startingPrice: 5000,
//       recommended: false
//     },
//     {
//       id: 'marketing',
//       title: 'Digital Marketing',
//       description: 'Social media growth and marketing campaigns that work',
//       icon: TrendingUp,
//       features: ['Social Media Management', 'Content Creation', 'Ad Campaigns', 'Analytics', 'SEO Strategy', 'Email Marketing'],
//       timeline: 'Ongoing',
//       startingPrice: 1200,
//       isMonthly: true,
//       recommended: false
//     },
//     {
//       id: 'webapp',
//       title: 'Web Application',
//       description: 'Custom web applications for complex business needs',
//       icon: Zap,
//       features: ['Custom Development', 'Database Design', 'User Authentication', 'API Integration', 'Cloud Hosting', 'Maintenance'],
//       timeline: '6-16 weeks',
//       startingPrice: 8000,
//       recommended: false
//     },
//     {
//       id: 'consultation',
//       title: 'Strategy Consultation',
//       description: 'Expert guidance on digital strategy and implementation',
//       icon: Users,
//       features: ['Digital Audit', 'Strategy Planning', 'Technology Consultation', 'Market Analysis', 'Action Plan', 'Implementation Support'],
//       timeline: '1-2 weeks',
//       startingPrice: 500,
//       recommended: false
//     }
//   ];

//   const timelines = [
//     { id: 'asap', label: 'ASAP (Rush Job)', description: 'Need it done within 1-2 weeks', multiplier: 1.5, icon: '🚀' },
//     { id: 'month', label: '1 Month', description: 'Standard timeline for most projects', multiplier: 1, icon: '⏰', popular: true },
//     { id: '2months', label: '2-3 Months', description: 'Flexible timeline, best value', multiplier: 0.9, icon: '💰' },
//     { id: 'flexible', label: 'Flexible', description: 'No specific deadline', multiplier: 0.8, icon: '🎯' }
//   ];

//   const budgets = [
//     { id: 'startup', label: '$1,000 - $5,000', description: 'Perfect for startups and small businesses', icon: '🌱' },
//     { id: 'growing', label: '$5,000 - $15,000', description: 'Ideal for growing businesses', icon: '📈', popular: true },
//     { id: 'established', label: '$15,000 - $50,000', description: 'For established companies', icon: '🏢' },
//     { id: 'enterprise', label: '$50,000+', description: 'Enterprise-level solutions', icon: '🏛️' }
//   ];

//   const industries = [
//     'Technology', 'Healthcare', 'E-commerce', 'Finance', 'Education', 'Real Estate',
//     'Food & Beverage', 'Fashion', 'Automotive', 'Construction', 'Legal', 'Non-profit',
//     'Entertainment', 'Travel', 'Fitness', 'Beauty', 'Agriculture', 'Other'
//   ];

//   const companySizes = [
//     { id: 'solo', label: 'Solo Entrepreneur', description: '1 person' },
//     { id: 'startup', label: 'Startup', description: '2-10 employees' },
//     { id: 'small', label: 'Small Business', description: '11-50 employees' },
//     { id: 'medium', label: 'Medium Business', description: '51-200 employees' },
//     { id: 'large', label: 'Large Enterprise', description: '200+ employees' }
//   ];

//   const additionalServices = [
//     { id: 'seo', label: 'SEO Optimization', description: 'Improve search rankings' },
//     { id: 'copywriting', label: 'Professional Copywriting', description: 'Compelling content creation' },
//     { id: 'photography', label: 'Professional Photography', description: 'High-quality product/brand photos' },
//     { id: 'maintenance', label: 'Ongoing Maintenance', description: 'Regular updates and support' },
//     { id: 'training', label: 'Team Training', description: 'Learn to manage your digital assets' },
//     { id: 'analytics', label: 'Advanced Analytics', description: 'Detailed performance tracking' }
//   ];

//   const faqs = [
//     {
//       question: "How long does it take to get started after I submit this form?",
//       answer: "We'll review your submission within 4 business hours and schedule a discovery call within 24 hours. Most projects begin within 1 week of the initial consultation, depending on your timeline and our current capacity."
//     },
//     {
//       question: "What's included in the project cost and are there any hidden fees?",
//       answer: "All our projects include design, development, testing, launch support, and 30 days of post-launch support. We provide transparent pricing with no hidden fees. Any additional features or changes beyond the agreed scope will be discussed upfront with clear pricing."
//     },
//     {
//       question: "Do you work with clients internationally?",
//       answer: "Yes! We work with clients worldwide and are experienced in managing projects across different time zones. We use modern collaboration tools and have flexible communication schedules to accommodate global clients."
//     },
//     {
//       question: "Can I make changes during the project development?",
//       answer: "Absolutely! We include 2-3 revision rounds in all projects and encourage feedback throughout the process. Major scope changes can be accommodated with transparent additional pricing and timeline adjustments."
//     },
//     {
//       question: "What happens if I'm not satisfied with the final result?",
//       answer: "Your satisfaction is our priority. We offer unlimited revisions within the agreed scope and a 30-day post-launch support period. If you're still not satisfied, we'll work with you to make it right or discuss alternative solutions."
//     },
//     {
//       question: "Do you provide ongoing support after project completion?",
//       answer: "Yes! All projects include 30 days of free post-launch support. We also offer ongoing maintenance packages, updates, and support services that can be customized to your needs."
//     }
//   ];

//   // Validation functions
//   const validateStep = (step) => {
//     const newErrors = {};
    
//     switch (step) {
//       case 1:
//         if (!projectType) newErrors.projectType = 'Please select a project type';
//         break;
//       case 2:
//         if (!timeline) newErrors.timeline = 'Please select a timeline';
//         if (!budget) newErrors.budget = 'Please select a budget range';
//         break;
//       case 3:
//         if (!formData.firstName) newErrors.firstName = 'First name is required';
//         if (!formData.lastName) newErrors.lastName = 'Last name is required';
//         if (!formData.email) newErrors.email = 'Email is required';
//         if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
//         if (!formData.businessName) newErrors.businessName = 'Business name is required';
//         if (!formData.industry) newErrors.industry = 'Please select an industry';
//         break;
//       case 4:
//         if (!formData.goals) newErrors.goals = 'Please describe your project goals';
//         if (!formData.targetAudience) newErrors.targetAudience = 'Please describe your target audience';
//         break;
//       case 5:
//         if (!formData.termsAccepted) newErrors.termsAccepted = 'Please accept the terms and conditions';
//         break;
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleArrayInputChange = (name, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [name]: prev[name].includes(value) 
//         ? prev[name].filter(item => item !== value)
//         : [...prev[name], value]
//     }));
//   };

//   const nextStep = () => {
//     if (validateStep(currentStep) && currentStep < 5) {
//       setCurrentStep(currentStep + 1);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   const handleSubmit = async () => {
//     if (!validateStep(5)) return;
    
//     setLoading(true);
    
//     try {
//       // Prepare data for API
//       const submissionData = {
//         projectType,
//         timeline,
//         budget,
//         estimatedCost: getEstimatedCost(),
//         ...formData,
//         submittedAt: new Date().toISOString(),
//         source: 'get_started_form'
//       };
      
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       console.log('Project Data Submitted:', submissionData);
//       setShowSuccess(true);
      
//     } catch (error) {
//       console.error('Submission error:', error);
//       setErrors({ submit: 'There was an error submitting your project. Please try again.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setCurrentStep(1);
//     setProjectType('');
//     setTimeline('');
//     setBudget('');
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       company: '',
//       businessName: '',
//       industry: '',
//       companySize: '',
//       website: '',
//       goals: '',
//       targetAudience: '',
//       competitors: '',
//       preferences: '',
//       additionalServices: [],
//       urgencyReason: '',
//       platformPreference: '',
//       integrations: [],
//       contentReady: '',
//       hostingPreference: '',
//       preferredContact: 'email',
//       timezone: '',
//       bestTimeToCall: '',
//       projectStartDate: '',
//       gdprCompliance: false,
//       accessibilityRequirements: false,
//       termsAccepted: false,
//       marketingConsent: false
//     });
//     setErrors({});
//     setShowSuccess(false);
//   };

//   const getSelectedProject = () => {
//     return projectTypes.find(p => p.id === projectType);
//   };

//   const getEstimatedCost = () => {
//     const project = getSelectedProject();
//     const timelineData = timelines.find(t => t.id === timeline);
    
//     if (!project || !timelineData) return null;
    
//     return Math.round(project.startingPrice * timelineData.multiplier);
//   };

//   if (showSuccess) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
//         <div className="max-w-2xl mx-auto text-center p-8 animate-fade-in">
//           <div className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center animate-bounce" style={{ backgroundColor: '#c50c2b' }}>
//             <CheckCircle className="w-12 h-12 text-white" />
//           </div>
//           <h1 className="text-4xl font-bold mb-6 animate-slide-up">We're Excited to Work With You!</h1>
//           <p className="text-xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
//             Thank you for choosing us for your project. We'll review your information and get back to you within 24 hours with next steps.
//           </p>
//           <div className="bg-gray-50 rounded-2xl p-6 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
//             <h3 className="font-bold mb-4">What happens next?</h3>
//             <div className="space-y-3 text-left">
//               <div className="flex items-center space-x-3">
//                 <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: '#c50c2b' }}>1</div>
//                 <span>We'll review your project requirements</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: '#c50c2b' }}>2</div>
//                 <span>Schedule a discovery call within 24 hours</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: '#c50c2b' }}>3</div>
//                 <span>Create a detailed project proposal</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: '#c50c2b' }}>4</div>
//                 <span>Begin your project within 1 week</span>
//               </div>
//             </div>
//           </div>
//           <button 
//             onClick={resetForm}
//             className="px-8 py-4 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up"
//             style={{ backgroundColor: '#c50c2b', animationDelay: '0.6s' }}
//           >
//             Start Another Project
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
//       <Navigation />
      
//       {/* Trust Indicators */}
//       <div className="pt-24 pb-8 bg-white border-b">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 animate-fade-in">
//             <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
//               <Shield className="w-4 h-4 text-green-500" />
//               <span>SSL Secured</span>
//             </div>
//             <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
//               <Award className="w-4 h-4 text-blue-500" />
//               <span>100+ Projects Delivered</span>
//             </div>
//             <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
//               <Star className="w-4 h-4 text-yellow-500" />
//               <span>4.9/5 Client Rating</span>
//             </div>
//             <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
//               <MessageCircle className="w-4 h-4" style={{ color: '#c50c2b' }} />
//               <span>24hr Response Time</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Progress Header */}
//       <div className="bg-white shadow-sm border-b sticky top-16 z-40">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex items-center justify-between mb-4">
//             <div className="animate-slide-right">
//               <h1 className="text-2xl lg:text-3xl font-bold">Get Started</h1>
//               <p className="text-gray-600">Step {currentStep} of {steps.length}: {steps.find(s => s.id === currentStep)?.description}</p>
//             </div>
//             <div className="text-right text-sm text-gray-500 animate-slide-left">
//               <div>Estimated completion: 5-8 minutes</div>
//               {getEstimatedCost() && (
//                 <div className="font-bold mt-1" style={{ color: '#c50c2b' }}>
//                   Estimated: ${getEstimatedCost()?.toLocaleString()}
//                 </div>
//               )}
//             </div>
//           </div>
          
//           {/* Progress Bar */}
//           <div className="flex items-center space-x-2">
//             {steps.map((step, index) => (
//               <div key={step.id} className="flex items-center flex-1">
//                 <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
//                   currentStep >= step.id 
//                     ? 'text-white transform scale-110' 
//                     : 'bg-gray-200 text-gray-400'
//                 }`} style={currentStep >= step.id ? { backgroundColor: '#c50c2b' } : {}}>
//                   {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.id}
//                 </div>
//                 {index < steps.length - 1 && (
//                   <div className={`flex-1 h-2 mx-2 rounded-full transition-all duration-700 ${
//                     currentStep > step.id ? 'bg-red-600' : 'bg-gray-200'
//                   }`} style={currentStep > step.id ? { backgroundColor: '#c50c2b' } : {}}></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-4xl mx-auto">
          
//           {/* Step 1: Project Type */}
//           {currentStep === 1 && (
//             <div className="space-y-8 animate-fade-in">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold mb-4 animate-slide-up">What can we help you with?</h2>
//                 <p className="text-xl text-gray-600 animate-slide-up" style={{ animationDelay: '0.2s' }}>Choose the service that best fits your needs</p>
//               </div>
              
//               <div className="grid md:grid-cols-2 gap-6">
//                 {projectTypes.map((project, index) => {
//                   const IconComponent = project.icon;
//                   return (
//                     <div
//                       key={project.id}
//                       onClick={() => setProjectType(project.id)}
//                       className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 animate-slide-up ${
//                         projectType === project.id 
//                           ? 'border-red-600 bg-red-50 shadow-lg' 
//                           : 'border-gray-200 bg-white hover:border-gray-300'
//                       }`}
//                       style={{ animationDelay: `${index * 0.1}s` }}
//                     >
//                       {project.recommended && (
//                         <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-full inline-block mb-3">
//                           Recommended
//                         </div>
//                       )}
//                       <div className="flex items-start space-x-4">
//                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
//                           projectType === project.id ? 'text-white animate-pulse' : 'text-gray-600'
//                         }`} style={projectType === project.id ? { backgroundColor: '#c50c2b' } : { backgroundColor: '#f3f4f6' }}>
//                           <IconComponent className="w-6 h-6" />
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                           <p className="text-gray-600 mb-4">{project.description}</p>
                          
//                           <div className="grid grid-cols-2 gap-2 mb-4">
//                             {project.features.map((feature) => (
//                               <div key={feature} className="flex items-center space-x-2">
//                                 <CheckCircle className="w-4 h-4 text-green-500" />
//                                 <span className="text-sm text-gray-600">{feature}</span>
//                               </div>
//                             ))}
//                           </div>
                          
//                           <div className="flex justify-between items-center text-sm">
//                             <span className="text-gray-500">Timeline: {project.timeline}</span>
//                             <span className="font-bold" style={{ color: '#c50c2b' }}>
//                               From ${project.startingPrice.toLocaleString()}{project.isMonthly ? '/mo' : ''}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
              
//               {errors.projectType && (
//                 <div className="text-red-500 text-center animate-shake">{errors.projectType}</div>
//               )}
//             </div>
//           )}

//           {/* Step 2: Timeline & Budget */}
//           {currentStep === 2 && (
//             <div className="space-y-8 animate-fade-in">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold mb-4 animate-slide-up">Timeline & Budget</h2>
//                 <p className="text-xl text-gray-600 animate-slide-up" style={{ animationDelay: '0.2s' }}>Help us understand your project constraints</p>
//               </div>

//               <div className="grid lg:grid-cols-2 gap-12">
//                 {/* Timeline */}
//                 <div className="animate-slide-right">
//                   <h3 className="text-2xl font-bold mb-6">When do you need this completed?</h3>
//                   <div className="space-y-4">
//                     {timelines.map((time, index) => (
//                       <div
//                         key={time.id}
//                         onClick={() => setTimeline(time.id)}
//                         className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 animate-slide-up ${
//                           timeline === time.id 
//                             ? 'border-red-600 bg-red-50 shadow-lg' 
//                             : 'border-gray-200 bg-white hover:border-gray-300'
//                         }`}
//                         style={{ animationDelay: `${index * 0.1}s` }}
//                       >
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center space-x-3">
//                             <span className="text-2xl">{time.icon}</span>
//                             <div>
//                               <h4 className="font-bold">{time.label}</h4>
//                                                             <p className="text-gray-600 text-sm">{time.description}</p>
//                             </div>
//                           </div>
//                           {time.popular && (
//                             <div className="bg-yellow-300 text-yellow-900 text-xs px-2 py-1 rounded-full">
//                               Popular
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   {errors.timeline && (
//                     <div className="text-red-500 mt-2">{errors.timeline}</div>
//                   )}
//                 </div>

//                 {/* Budget */}
//                 <div className="animate-slide-left">
//                   <h3 className="text-2xl font-bold mb-6">What's your budget range?</h3>
//                   <div className="space-y-4">
//                     {budgets.map((b, index) => (
//                       <div
//                         key={b.id}
//                         onClick={() => setBudget(b.id)}
//                         className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 animate-slide-up ${
//                           budget === b.id 
//                             ? 'border-red-600 bg-red-50 shadow-lg' 
//                             : 'border-gray-200 bg-white hover:border-gray-300'
//                         }`}
//                         style={{ animationDelay: `${index * 0.1}s` }}
//                       >
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center space-x-3">
//                             <span className="text-2xl">{b.icon}</span>
//                             <div>
//                               <h4 className="font-bold">{b.label}</h4>
//                               <p className="text-gray-600 text-sm">{b.description}</p>
//                             </div>
//                           </div>
//                           {b.popular && (
//                             <div className="bg-yellow-300 text-yellow-900 text-xs px-2 py-1 rounded-full">
//                               Popular
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   {errors.budget && (
//                     <div className="text-red-500 mt-2">{errors.budget}</div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Continue/Back Buttons */}
//           <div className="flex justify-between mt-12 animate-fade-in">
//             {currentStep > 1 && (
//               <button
//                 onClick={prevStep}
//                 className="px-6 py-3 text-gray-600 font-semibold bg-gray-100 rounded-xl hover:bg-gray-200 transition"
//               >
//                 Back
//               </button>
//             )}
//             {currentStep < steps.length && (
//               <button
//                 onClick={nextStep}
//                 className="ml-auto px-6 py-3 text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
//                 style={{ backgroundColor: '#c50c2b' }}
//               >
//                 Continue <ArrowRight className="inline-block ml-2 w-5 h-5" />
//               </button>
//             )}
//             {currentStep === steps.length && (
//               <button
//                 onClick={handleSubmit}
//                 className="ml-auto px-6 py-3 text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
//                 style={{ backgroundColor: '#c50c2b' }}
//                 disabled={loading}
//               >
//                 {loading ? 'Submitting...' : 'Submit Project'}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default GetStarted;
