// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   ArrowRight, 
//   Globe,
//   GraduationCap,
//   Fish,
//   TrendingUp,
//   Users,
//   Calendar,
//   ExternalLink,
//   Play,
//   Building2,
//   Sparkles,
//   Target,
//   Zap,
//   Award,
//   Clock,
//   MapPin,
//   Mail,
//   Phone,
//   ChevronRight,
//   Layers,
//   Briefcase
// } from 'lucide-react';

// const OurCompaniesPage = () => {
//   const [selectedCompany, setSelectedCompany] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const heroRef = useRef(null);

//   // Companies data
//   const companies = [
//     {
//       id: 1,
//       name: 'Ajeflex Digitals',
//       category: 'Digital Agency',
//       status: 'Active',
//       description: 'Full-service digital agency specializing in web development, brand design, and digital growth strategies.',
//       longDescription: 'Ajeflex Digitals is our flagship digital agency that has helped over 200+ businesses transform their online presence. We combine cutting-edge technology with creative design to deliver exceptional digital experiences.',
//       services: ['Web Development', 'Brand Design', 'Digital Marketing', 'UI/UX Design', 'E-commerce Solutions'],
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
//       icon: Globe,
//       color: 'from-blue-500 to-purple-600',
//       stats: [
//         { label: 'Projects Completed', value: '200+' },
//         { label: 'Happy Clients', value: '150+' },
//         { label: 'Years Experience', value: '5+' }
//       ],
//       website: 'https://ajeflex-digitals-main.vercel.app/',
//       founded: '2019'
//     },
//     {
//       id: 2,
//       name: 'EduFlex Online Academy',
//       category: 'Education Technology',
//       status: 'Active',
//       description: 'Comprehensive online learning platform offering courses in technology, business, and creative skills.',
//       longDescription: 'EduFlex Online Academy revolutionizes education by providing accessible, high-quality online courses. Our platform serves thousands of students worldwide with expert-led courses and interactive learning experiences.',
//       services: ['Online Courses', 'Certification Programs', 'Live Webinars', 'Skill Assessments', 'Career Guidance'],
//       image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
//       icon: GraduationCap,
//       color: 'from-green-500 to-teal-600',
//       stats: [
//         { label: 'Active Students', value: '5,000+' },
//         { label: 'Courses Available', value: '100+' },
//         { label: 'Success Rate', value: '92%' }
//       ],
//       website: '#',
//       founded: '2021'
//     },
//     {
//       id: 3,
//       name: 'AquaFlex Farms',
//       category: 'Aquaculture',
//       status: 'Coming Soon',
//       description: 'Sustainable fish farming operation focused on premium quality fish production and environmental responsibility.',
//       longDescription: 'AquaFlex Farms represents our expansion into sustainable aquaculture. Using modern farming techniques and eco-friendly practices, we aim to contribute to food security while maintaining environmental sustainability.',
//       services: ['Fish Production', 'Sustainable Farming', 'Supply Chain', 'Quality Control', 'Distribution'],
//       image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
//       icon: Fish,
//       color: 'from-blue-400 to-cyan-500',
//       stats: [
//         { label: 'Planned Capacity', value: '10,000kg/month' },
//         { label: 'Launch Date', value: 'Q3 2025' },
//         { label: 'Investment', value: '$500K+' }
//       ],
//       website: '#',
//       founded: '2025 (Planned)'
//     },
//     {
//       id: 4,
//       name: 'FlexConsult Pro',
//       category: 'Business Consulting',
//       status: 'Active',
//       description: 'Strategic business consulting firm helping companies optimize operations and accelerate growth.',
//       longDescription: 'FlexConsult Pro leverages our diverse business experience to help companies navigate challenges and capitalize on opportunities. We provide strategic guidance across multiple industries.',
//       services: ['Business Strategy', 'Operations Optimization', 'Digital Transformation', 'Market Analysis', 'Growth Planning'],
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
//       icon: Briefcase,
//       color: 'from-orange-500 to-red-500',
//       stats: [
//         { label: 'Clients Served', value: '50+' },
//         { label: 'Industries', value: '12+' },
//         { label: 'Success Rate', value: '95%' }
//       ],
//       website: '#',
//       founded: '2022'
//     },
//     {
//       id: 5,
//       name: 'FlexTech Innovations',
//       category: 'Technology Solutions',
//       status: 'In Development',
//       description: 'Cutting-edge technology solutions including AI, IoT, and custom software development for enterprises.',
//       longDescription: 'FlexTech Innovations is our venture into advanced technology solutions. We focus on developing AI-powered applications, IoT systems, and custom enterprise software that drives innovation.',
//       services: ['AI Development', 'IoT Solutions', 'Custom Software', 'Tech Consulting', 'System Integration'],
//       image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
//       icon: Zap,
//       color: 'from-purple-500 to-pink-500',
//       stats: [
//         { label: 'Projects Pipeline', value: '15+' },
//         { label: 'Launch Date', value: 'Q2 2025' },
//         { label: 'Tech Stack', value: '20+' }
//       ],
//       website: '#',
//       founded: '2025 (Planned)'
//     }
//   ];

//   // Mouse tracking for 3D effects
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (heroRef.current) {
//         const rect = heroRef.current.getBoundingClientRect();
//         setMousePos({
//           x: (e.clientX - rect.left - rect.width / 2) / rect.width,
//           y: (e.clientY - rect.top - rect.height / 2) / rect.height
//         });
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Active': return 'bg-green-500';
//       case 'Coming Soon': return 'bg-blue-500';
//       case 'In Development': return 'bg-orange-500';
//       default: return 'bg-gray-500';
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case 'Active': return <Award className="w-4 h-4" />;
//       case 'Coming Soon': return <Clock className="w-4 h-4" />;
//       case 'In Development': return <Target className="w-4 h-4" />;
//       default: return <Building2 className="w-4 h-4" />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
//       {/* Custom Styles */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
//           50% { transform: translateY(-20px) rotateX(10deg) rotateY(5deg); }
//         }
        
//         @keyframes pulse-glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
//           50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
//         }

//         .glass-card {
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
//         }

//         .glass-card-hover {
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .glass-card-hover:hover {
//           background: rgba(255, 255, 255, 0.1);
//           transform: translateY(-10px) scale(1.02);
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
//         }

//         .floating-3d {
//           animation: float 6s ease-in-out infinite;
//           transform-style: preserve-3d;
//         }

//         .gradient-mesh {
//           background: 
//             radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
//             radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
//             radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
//         }

//         .company-card-active {
//           background: rgba(255, 255, 255, 0.1);
//           border-color: rgba(59, 130, 246, 0.5);
//           box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
//         }
//       `}</style>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 glass-card">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Ajeflex Group
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               {['Home', 'Companies', 'About', 'Contact'].map((item) => (
//                 <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
//                   {item}
//                 </a>
//               ))}
//             </div>
//             <button className="glass-card px-6 py-2 rounded-full hover:bg-white/10 transition-all">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section ref={heroRef} className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           {/* 3D Floating Elements */}
//           <div 
//             className="absolute top-20 left-20 w-32 h-32 floating-3d"
//             style={{
//               transform: `translateX(${mousePos.x * 30}px) translateY(${mousePos.y * 30}px) rotateX(${mousePos.y * 15}deg) rotateY(${mousePos.x * 15}deg)`
//             }}
//           >
//             <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-2xl glass-card flex items-center justify-center">
//               <Building2 className="w-12 h-12 text-blue-400" />
//             </div>
//           </div>
          
//           <div 
//             className="absolute top-40 right-32 w-24 h-24 floating-3d"
//             style={{
//               transform: `translateX(${mousePos.x * -20}px) translateY(${mousePos.y * -20}px) rotateZ(${mousePos.x * 10}deg)`
//             }}
//           >
//             <div className="w-full h-full bg-gradient-to-br from-green-500/30 to-teal-600/30 rounded-xl glass-card flex items-center justify-center">
//               <GraduationCap className="w-8 h-8 text-green-400" />
//             </div>
//           </div>

//           <div 
//             className="absolute bottom-32 left-32 w-28 h-28 floating-3d"
//             style={{
//               transform: `translateX(${mousePos.x * 25}px) translateY(${mousePos.y * 25}px) rotateX(${mousePos.y * -10}deg)`
//             }}
//           >
//             <div className="w-full h-full bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-3xl glass-card flex items-center justify-center">
//               <Fish className="w-10 h-10 text-orange-400" />
//             </div>
//           </div>

//           <div 
//             className="absolute bottom-20 right-20 w-20 h-20 floating-3d"
//             style={{
//               transform: `translateX(${mousePos.x * -15}px) translateY(${mousePos.y * -15}px) rotateY(${mousePos.x * 20}deg)`
//             }}
//           >
//             <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl glass-card flex items-center justify-center">
//               <Zap className="w-8 h-8 text-purple-400" />
//             </div>
//           </div>
//         </div>

//         <div className="container mx-auto px-6 text-center relative z-10">
//           <div className="max-w-5xl mx-auto">
//             {/* Badge */}
//             <div className="inline-flex items-center space-x-2 glass-card rounded-full px-6 py-3 mb-8">
//               <Layers className="w-5 h-5 text-blue-400" />
//               <span className="text-sm font-medium">Diversified Business Portfolio</span>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
//               Our{' '}
//               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                 Companies
//               </span>
//               <br />
//               Building the{' '}
//               <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
//                 Future
//               </span>
//             </h1>

//             <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
//               From digital innovation to sustainable agriculture, our diverse portfolio of companies is united by a commitment to excellence, innovation, and positive impact across multiple industries.
//             </p>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
//               {[
//                 { number: '5', label: 'Companies', icon: Building2 },
//                 { number: '3', label: 'Industries', icon: Target },
//                 { number: '2019', label: 'Founded', icon: Calendar },
//                 { number: '200+', label: 'Total Projects', icon: Award }
//               ].map((stat, index) => (
//                 <div key={index} className="glass-card p-6 rounded-2xl">
//                   <div className="flex items-center justify-center mb-2">
//                     <stat.icon className="w-6 h-6 text-blue-400 mr-2" />
//                     <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                       {stat.number}
//                     </div>
//                   </div>
//                   <div className="text-sm text-gray-400">{stat.label}</div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
//               Explore Our Companies
//               <ChevronRight className="w-5 h-5 ml-2 inline" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Companies Grid Section */}
//       <section className="py-32 relative">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 glass-card rounded-full px-6 py-3 mb-8">
//               <Sparkles className="w-5 h-5 text-purple-400" />
//               <span className="text-sm font-semibold uppercase tracking-wider">Our Business Portfolio</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-black mb-8">
//               Diverse{' '}
//               <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//                 Excellence
//               </span>
//             </h2>
//           </div>

//           {/* Companies Grid */}
//           <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//             {companies.map((company, index) => {
//               const IconComponent = company.icon;
//               return (
//                 <div 
//                   key={company.id} 
//                   className="glass-card-hover glass-card rounded-3xl overflow-hidden group cursor-pointer"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                   onClick={() => setSelectedCompany(index)}
//                 >
//                   {/* Image */}
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={company.image}
//                       alt={company.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
//                     {/* Status Badge */}
//                     <div className="absolute top-4 right-4">
//                       <div className={`${getStatusColor(company.status)} px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1`}>
//                         {getStatusIcon(company.status)}
//                         <span>{company.status}</span>
//                       </div>
//                     </div>

//                     {/* Icon */}
//                     <div className="absolute bottom-4 left-4">
//                       <div className={`w-12 h-12 bg-gradient-to-br ${company.color} rounded-xl flex items-center justify-center`}>
//                         <IconComponent className="w-6 h-6 text-white" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-3">
//                       <h3 className="text-xl font-bold">{company.name}</h3>
//                       <span className="text-sm text-gray-400">{company.founded}</span>
//                     </div>
                    
//                     <p className="text-sm text-blue-400 mb-3 font-medium">{company.category}</p>
//                     <p className="text-gray-400 mb-6 leading-relaxed">{company.description}</p>
                    
//                     {/* Stats */}
//                     <div className="grid grid-cols-3 gap-4 mb-6">
//                       {company.stats.map((stat, idx) => (
//                         <div key={idx} className="text-center">
//                           <div className="text-lg font-bold text-white">{stat.value}</div>
//                           <div className="text-xs text-gray-500">{stat.label}</div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Action Button */}
//                     <button className="w-full glass-card py-3 px-6 rounded-xl font-medium group-hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
//                       {company.status === 'Active' ? 'Visit Website' : 'Learn More'}
//                       <ExternalLink className="w-4 h-4 ml-2" />
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Featured Company Detail Section */}
//       <section className="py-32 bg-gray-900/50 relative">
//         <div className="container mx-auto px-6">
//           <div className="glass-card rounded-3xl p-8 lg:p-12">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               {/* Left Content */}
//               <div>
//                 <div className="flex items-center mb-6">
//                   <div className={`w-16 h-16 bg-gradient-to-br ${companies[selectedCompany].color} rounded-2xl flex items-center justify-center mr-4`}>
//                     {React.createElement(companies[selectedCompany].icon, { className: "w-8 h-8 text-white" })}
//                   </div>
//                   <div>
//                     <h3 className="text-3xl font-bold">{companies[selectedCompany].name}</h3>
//                     <p className="text-blue-400 font-medium">{companies[selectedCompany].category}</p>
//                   </div>
//                 </div>

//                 <p className="text-gray-300 text-lg mb-8 leading-relaxed">
//                   {companies[selectedCompany].longDescription}
//                 </p>

//                 {/* Services */}
//                 <div className="mb-8">
//                   <h4 className="text-xl font-bold mb-4">Key Services</h4>
//                   <div className="grid grid-cols-2 gap-3">
//                     {companies[selectedCompany].services.map((service, idx) => (
//                       <div key={idx} className="flex items-center text-gray-400">
//                         <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
//                         {service}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   {companies[selectedCompany].status === 'Active' && (
//                     <a 
//                       href={companies[selectedCompany].website}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
//                     >
//                       Visit Website
//                       <ExternalLink className="w-4 h-4 ml-2" />
//                     </a>
//                   )}
//                   <button className="glass-card px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300">
//                     Contact Team
//                     <Mail className="w-4 h-4 ml-2 inline" />
//                   </button>
//                 </div>
//               </div>

//               {/* Right Content - Image */}
//               <div className="relative">
//                 <img
//                   src={companies[selectedCompany].image}
//                   alt={companies[selectedCompany].name}
//                   className="w-full h-80 object-cover rounded-2xl"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
//               </div>
//             </div>
//           </div>

//           {/* Company Navigation */}
//           <div className="flex justify-center mt-12 space-x-4 overflow-x-auto pb-4">
//             {companies.map((company, index) => (
//               <button
//                 key={company.id}
//                 onClick={() => setSelectedCompany(index)}
//                 className={`flex-shrink-0 glass-card px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
//                   index === selectedCompany ? 'company-card-active' : 'hover:bg-white/10'
//                 }`}
//               >
//                 {React.createElement(company.icon, { className: "w-4 h-4" })}
//                 <span className="text-sm font-medium">{company.name}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-32 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
//         <div className="absolute inset-0 gradient-mesh"></div>
        
//         <div className="container mx-auto px-6 text-center relative z-10">
//           <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
//             Ready to Work with
//             <br />
//             <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
//               Any of Our Companies?
//             </span>
//           </h2>
//           <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Whether you need digital solutions, educational programs, business consulting, or looking to partner with our upcoming ventures, we're here to help you succeed.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-2 flex items-center justify-center">
//               <Phone className="w-6 h-6 mr-3" />
//               Contact Us Today
//               <ArrowRight className="w-6 h-6 ml-3" />
//             </button>
//             <button className="glass-card px-10 py-5 rounded-2xl font-bold text-lg text-white hover:bg-white/20 transition-all duration-300 shadow-2xl transform hover:-translate-y-2">
//               Schedule Consultation
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-16 glass-card">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-8">
//             {/* Company Info */}
//             <div className="md:col-span-2">
//               <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
//                 Ajeflex Group
//               </div>
//               <p className="text-gray-400 mb-6 max-w-md">
//                 Building the future across multiple industries with innovation, excellence, and sustainable growth.
//               </p>
//               <div className="flex space-x-4">
//                 <div className="glass-card p-3 rounded-xl">
//                   <Mail className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <div className="glass-card p-3 rounded-xl">
//                   <Phone className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <div className="glass-card p-3 rounded-xl">
//                   <MapPin className="w-5 h-5 text-blue-400" />
//                 </div>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="text-lg font-bold mb-4">Our Companies</h4>
//               <div className="space-y-2">
//                 {companies.slice(0, 4).map((company) => (
//                   <a key={company.id} href="#" className="block text-gray-400 hover:text-white transition-colors">
//                     {company.name}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Contact */}
//             <div>
//               <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
//               <div className="space-y-2 text-gray-400">
//                 <p>info@ajeflexgroup.com</p>
//                 <p>+234 xxx xxx xxxx</p>
//                 <p>Lagos, Nigeria</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
//             <p>&copy; 2025 Ajeflex Group. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default OurCompaniesPage;





import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Layers,
  Calendar,
  Award,
  Target,
  Building2,
  Sparkles,
  GraduationCap,
  Fish,
  Zap,
  Briefcase,
  Clock
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const OurCompaniesPage = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const companies = [
    {
      id: 1,
      name: 'Ajeflex Digitals',
      category: 'Digital Agency',
      status: 'Active',
      description: 'Web development, branding, and growth strategies.',
      longDescription: 'Ajeflex Digitals delivers web apps, UI/UX, and digital marketing solutions that empower brands online.',
      services: ['Web Dev', 'UI/UX', 'Branding', 'Marketing'],
      image: '/images/ajeflex-digitals.jpg',
      icon: Building2,
      color: 'from-blue-500 to-purple-600',
      stats: [
        { label: 'Projects', value: '200+' },
        { label: 'Clients', value: '150+' },
        { label: 'Experience', value: '5+ yrs' }
      ],
      website: 'https://ajeflex.com',
      founded: '2019'
    },
    {
      id: 2,
      name: 'CloudForge ',
      category: 'EdTech',
      status: 'Active',
      description: 'Accessible tech and business education.',
      longDescription: 'EduFlex equips students with practical skills via live and on-demand courses in tech and business.',
      services: ['Courses', 'Live Classes', 'Certifications'],
      image: '/images/eduflex.jpg',
      icon: GraduationCap,
      color: 'from-green-500 to-teal-600',
      stats: [
        { label: 'Students', value: '5K+' },
        { label: 'Courses', value: '100+' },
        { label: 'Success Rate', value: '92%' }
      ],
      website: 'https://cloudforge-aje.com/',
      founded: '2021'
    }
   
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-500';
      case 'Coming Soon': return 'bg-blue-500';
      case 'In Development': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <Navigation />

      <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Meet Our
          <span className="bg-gradient-to-r from-[#c50c2b] to-yellow-500 bg-clip-text text-transparent ml-3">
            Companies
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-12">
          Our brands work across industries—from digital and education to agritech and consulting.
        </p>
        <button className="bg-[#c50c2b] text-white px-6 py-3 rounded-xl hover:bg-[#a50923] transition font-bold">
          Explore Portfolio
          <ChevronRight className="inline w-5 h-5 ml-1" />
        </button>
      </section>

      <section className="py-24 px-6">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 bg-gray-800/50 p-8 rounded-2xl">
          {companies.map((company, i) => {
            const Icon = company.icon;
            return (
              <div
                key={company.id}
                onClick={() => setSelectedCompany(i)}
                className={`rounded-2xl bg-white/5 p-6 transition-all hover:scale-105 cursor-pointer border border-transparent hover:border-[#c50c2b] ${i === selectedCompany ? 'ring-2 ring-[#c50c2b]' : ''}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${company.color} mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{company.name}</h3>
                    <p className="text-sm text-[#c50c2b]">{company.category}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{company.description}</p>
                <div className="flex space-x-4 text-sm text-gray-300">
                  {company.stats.map((s, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-bold text-white">{s.value}</div>
                      <div className="text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="bg-white/5 p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">{companies[selectedCompany].name}</h3>
              <p className="text-gray-300 mb-4">{companies[selectedCompany].longDescription}</p>
              <ul className="text-gray-400 list-disc ml-5 mb-4">
                {companies[selectedCompany].services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
              {companies[selectedCompany].status === 'Active' && (
                <a href={companies[selectedCompany].website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#c50c2b] hover:underline">
                  Visit Website <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              )}
            </div>
            <img
              src={companies[selectedCompany].image}
              alt={companies[selectedCompany].name}
              className="rounded-xl w-full md:w-1/2 object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurCompaniesPage;
