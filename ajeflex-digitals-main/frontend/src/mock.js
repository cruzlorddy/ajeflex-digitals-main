// Mock data for Ajeflex Digitals website

export const mockData = {
  // Company Info
  company: {
    name: "Ajeflex Digitals",
    tagline: "We Build Brands, Websites, and Digital Growth Engines.",
    subtitle: "Custom websites. Beautiful design. Social growth that scales.",
    phone: "+2347082449901",
    email: "Ajeflex@gmail.com",
    address: "Sapele Road, Benin City, Edo State, Nigeria"
  },

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Services", 
      href: "/services",
      dropdown: [
        { name: "Web Development", href: "/services/web" },
        { name: "Graphic Design", href: "/services/design" },
        { name: "Social Media Growth", href: "/services/social" }
      ]
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ],

  // Services
  services: [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and optimized for performance.",
      icon: "Code",
      features: ["Custom Design", "Responsive Layout", "SEO Optimized", "Fast Loading"]
    },
    {
      id: 2,
      title: "Graphic Design",
      description: "Brand identity, logos, and visual assets that make your business stand out from the competition.",
      icon: "Palette",
      features: ["Brand Identity", "Logo Design", "Print Materials", "Digital Assets"]
    },
    {
      id: 3,
      title: "Social Media Growth",
      description: "Strategic social media management and growth across Instagram, Facebook, Twitter, and LinkedIn.",
      icon: "TrendingUp",
      features: ["Content Strategy", "Account Growth", "Engagement", "Analytics"]
    }
  ],

  // Process Steps
  process: [
    {
      step: 1,
      title: "Discover",
      description: "We dive deep into your business goals, target audience, and competitive landscape to create a strategic foundation."
    },
    {
      step: 2,
      title: "Design",
      description: "Our creative team crafts beautiful, user-centered designs that align with your brand and convert visitors into customers."
    },
    {
      step: 3,
      title: "Develop",
      description: "We build your digital solution using cutting-edge technologies, ensuring performance, security, and scalability."
    },
    {
      step: 4,
      title: "Launch",
      description: "We thoroughly test and deploy your project, ensuring everything works perfectly across all devices and browsers."
    },
    {
      step: 5,
      title: "Grow",
      description: "Post-launch support and optimization to help your business grow and adapt to changing market needs."
    }
  ],

  // Portfolio Projects
  portfolio: [
    {
      id: 1,
      title: "TechStartup Dashboard",
      category: "Web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Modern SaaS dashboard with advanced analytics"
    },
    {
      id: 2,
      title: "Luxury Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      description: "Complete brand identity for luxury fashion house"
    },
    {
      id: 3,
      title: "Restaurant Social Campaign",
      category: "Social",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      description: "Social media growth campaign for local restaurant"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      category: "Web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Custom e-commerce solution with integrated payment"
    },
    {
      id: 5,
      title: "Fitness App Branding",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Mobile app branding and UI design"
    },
    {
      id: 6,
      title: "B2B Social Strategy",
      category: "Social",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      description: "LinkedIn growth strategy for B2B company"
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechFlow",
      company: "TechFlow Solutions",
      quote: "Ajeflex Digitals transformed our online presence completely. The website they built is not only beautiful but also drives real business results.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c0?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, GreenEats",
      company: "GreenEats Restaurant",
      quote: "Their social media strategy helped us grow from 500 to 15,000 followers in just 6 months. Our revenue increased by 200%.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, Fashion Forward",
      company: "Fashion Forward Inc.",
      quote: "The branding work they did for us was exceptional. Our new identity perfectly captures our brand values and appeals to our target market.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
    }
  ],

  // FAQ
  faq: [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A standard website takes 4-6 weeks, while comprehensive branding projects may take 6-8 weeks."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we offer various support packages including maintenance, updates, and continued optimization to ensure your digital presence stays current."
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer: "Absolutely! We can work within your existing brand framework or help evolve your brand identity to better serve your goals."
    }
  ],

  // Social Links
  social: {
    instagram: "https://instagram.com/ajeflexdigitals",
    facebook: "https://facebook.com/ajeflexdigitals",
    twitter: "https://twitter.com/ajeflexdigitals",
    linkedin: "https://linkedin.com/company/ajeflexdigitals"
  }
};
