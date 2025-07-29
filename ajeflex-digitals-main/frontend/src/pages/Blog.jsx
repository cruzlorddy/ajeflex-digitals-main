// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Calendar,
//   Clock,
//   User,
//   ArrowRight,
//   Tag,
//   Search,
//   TrendingUp,
//   Code,
//   Palette,
//   Zap
// } from 'lucide-react';
// import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';
// import AnimatedSection, { AnimatedCard, StaggerContainer, StaggerChild } from '../components/AnimatedSection';
// import ScrollToTop from '../components/ScrollToTop';
// import WhatsAppButton from '../components/WhatsAppButton';

// const Blog = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = [
//     { name: 'All', icon: TrendingUp, count: 12 },
//     { name: 'Web Development', icon: Code, count: 5 },
//     { name: 'Design', icon: Palette, count: 4 },
//     { name: 'Marketing', icon: Zap, count: 3 }
//   ];

//   const blogPosts = [
//     {
//       id: 1,
//       title: '10 Web Design Trends That Will Dominate 2024',
//       excerpt: 'Discover the latest web design trends that are shaping the digital landscape and learn how to implement them in your next project.',
//       content: 'The world of web design is constantly evolving, and 2024 brings exciting new trends that push the boundaries of user experience and visual appeal...',
//       author: 'Sarah Johnson',
//       date: '2024-01-15',
//       readTime: '8 min read',
//       category: 'Design',
//       image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=400&fit=crop',
//       tags: ['UI/UX', 'Trends', 'Design'],
//       featured: true
//     },
//     {
//       id: 2,
//       title: 'The Complete Guide to React Performance Optimization',
//       excerpt: 'Learn advanced techniques to make your React applications lightning fast and provide better user experiences.',
//       content: 'React performance optimization is crucial for creating smooth, responsive applications that users love...',
//       author: 'Michael Chen',
//       date: '2024-01-12',
//       readTime: '12 min read',
//       category: 'Web Development',
//       image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
//       tags: ['React', 'Performance', 'JavaScript'],
//       featured: true
//     },
//     {
//       id: 3,
//       title: 'Social Media Marketing Strategies That Actually Work',
//       excerpt: 'Cut through the noise with proven social media strategies that drive real engagement and business growth.',
//       content: 'In today\'s crowded social media landscape, standing out requires more than just posting regularly...',
//       author: 'Emily Rodriguez',
//       date: '2024-01-10',
//       readTime: '6 min read',
//       category: 'Marketing',
//       image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
//       tags: ['Social Media', 'Marketing', 'Strategy'],
//       featured: false
//     },
//     {
//       id: 4,
//       title: 'Building Accessible Websites: A Developer\'s Guide',
//       excerpt: 'Learn how to create websites that are accessible to everyone, including users with disabilities.',
//       content: 'Web accessibility isn\'t just a nice-to-have feature—it\'s essential for creating inclusive digital experiences...',
//       author: 'David Kim',
//       date: '2024-01-08',
//       readTime: '10 min read',
//       category: 'Web Development',
//       image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop',
//       tags: ['Accessibility', 'Web Development', 'UX'],
//       featured: false
//     },
//     {
//       id: 5,
//       title: 'Color Psychology in Brand Design',
//       excerpt: 'Understand how colors influence consumer behavior and learn to choose the perfect palette for your brand.',
//       content: 'Colors have the power to evoke emotions, influence decisions, and shape brand perceptions...',
//       author: 'Lisa Park',
//       date: '2024-01-05',
//       readTime: '7 min read',
//       category: 'Design',
//       image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=400&fit=crop',
//       tags: ['Branding', 'Color Theory', 'Psychology'],
//       featured: false
//     },
//     {
//       id: 6,
//       title: 'The Future of E-commerce: Trends to Watch',
//       excerpt: 'Explore emerging e-commerce trends that will shape online shopping experiences in the coming years.',
//       content: 'E-commerce continues to evolve at breakneck speed, driven by technological advances and changing consumer behaviors...',
//       author: 'Alex Thompson',
//       date: '2024-01-03',
//       readTime: '9 min read',
//       category: 'Web Development',
//       image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
//       tags: ['E-commerce', 'Trends', 'Technology'],
//       featured: false
//     }
//   ];

//   const filteredPosts = blogPosts.filter(post => {
//     const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
//     const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const featuredPosts = blogPosts.filter(post => post.featured);
//   const regularPosts = filteredPosts.filter(post => !post.featured);

//   return (
//     <div className="min-h-screen">
//       <Navigation />
//       <ScrollToTop />
//       <WhatsAppButton />
      
//       {/* Hero Section */}
//       <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//         <div className="absolute inset-0 grid-bg opacity-30"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <AnimatedSection>
//             <div className="max-w-4xl mx-auto text-center">
//               <motion.div 
//                 className="inline-flex items-center space-x-2 bg-orange-50 rounded-full px-6 py-3 mb-8"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <TrendingUp className="w-5 h-5 text-orange-500" />
//                 <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
//                   Our Blog
//                 </span>
//               </motion.div>
              
//               <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-[0.95]">
//                 Insights &{' '}
//                 <span className="gradient-text">Ideas</span>
//               </h1>
              
//               <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
//                 Stay ahead of the curve with our latest insights on web development, 
//                 design trends, and digital marketing strategies.
//               </p>
              
//               {/* Search Bar */}
//               <motion.div 
//                 className="max-w-md mx-auto relative"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search articles..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white shadow-sm"
//                 />
//               </motion.div>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <AnimatedSection delay={0.2}>
//             <div className="flex flex-wrap justify-center gap-4 mb-16">
//               {categories.map((category, index) => {
//                 const IconComponent = category.icon;
//                 return (
//                   <motion.button
//                     key={category.name}
//                     onClick={() => setSelectedCategory(category.name)}
//                     className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
//                       selectedCategory === category.name
//                         ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <IconComponent className="w-4 h-4" />
//                     <span className="font-medium">{category.name}</span>
//                     <span className={`text-xs px-2 py-1 rounded-full ${
//                       selectedCategory === category.name
//                         ? 'bg-white/20 text-white'
//                         : 'bg-gray-200 text-gray-600'
//                     }`}>
//                       {category.count}
//                     </span>
//                   </motion.button>
//                 );
//               })}
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Featured Posts */}
//       {featuredPosts.length > 0 && (
//         <section className="py-16 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <AnimatedSection>
//               <h2 className="text-4xl font-black mb-12 text-center">
//                 Featured <span className="gradient-text">Articles</span>
//               </h2>
//             </AnimatedSection>
            
//             <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//               {featuredPosts.map((post, index) => (
//                 <AnimatedCard key={post.id} delay={index * 0.2}>
//                   <article className="card-3d overflow-hidden group cursor-pointer h-full">
//                     <div className="relative overflow-hidden">
//                       <img
//                         src={post.image}
//                         alt={post.title}
//                         className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                       />
//                       <div className="absolute top-4 left-4">
//                         <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                           Featured
//                         </span>
//                       </div>
//                     </div>
                    
//                     <div className="p-8">
//                       <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
//                         <div className="flex items-center space-x-1">
//                           <User className="w-4 h-4" />
//                           <span>{post.author}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <Calendar className="w-4 h-4" />
//                           <span>{new Date(post.date).toLocaleDateString()}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <Clock className="w-4 h-4" />
//                           <span>{post.readTime}</span>
//                         </div>
//                       </div>
                      
//                       <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-200">
//                         {post.title}
//                       </h3>
                      
//                       <p className="text-gray-600 mb-6 leading-relaxed">
//                         {post.excerpt}
//                       </p>
                      
//                       <div className="flex items-center justify-between">
//                         <div className="flex flex-wrap gap-2">
//                           {post.tags.slice(0, 2).map((tag) => (
//                             <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
                        
//                         <motion.div 
//                           className="flex items-center text-orange-500 font-medium group-hover:text-orange-600"
//                           whileHover={{ x: 5 }}
//                         >
//                           <span className="mr-2">Read More</span>
//                           <ArrowRight className="w-4 h-4" />
//                         </motion.div>
//                       </div>
//                     </div>
//                   </article>
//                 </AnimatedCard>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Regular Posts */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <AnimatedSection>
//             <h2 className="text-4xl font-black mb-12 text-center">
//               Latest <span className="gradient-text">Articles</span>
//             </h2>
//           </AnimatedSection>
          
//           <StaggerContainer>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//               {regularPosts.map((post, index) => (
//                 <StaggerChild key={post.id}>
//                   <motion.article 
//                     className="card-3d overflow-hidden group cursor-pointer h-full"
//                     whileHover={{ y: -10 }}
//                   >
//                     <div className="relative overflow-hidden">
//                       <img
//                         src={post.image}
//                         alt={post.title}
//                         className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
//                       />
//                       <div className="absolute top-4 left-4">
//                         <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
//                           {post.category}
//                         </span>
//                       </div>
//                     </div>
                    
//                     <div className="p-6">
//                       <div className="flex items-center space-x-3 text-xs text-gray-500 mb-3">
//                         <div className="flex items-center space-x-1">
//                           <User className="w-3 h-3" />
//                           <span>{post.author}</span>
//                         </div>
//                         <div className="flex items-center space-x-1">
//                           <Clock className="w-3 h-3" />
//                           <span>{post.readTime}</span>
//                         </div>
//                       </div>
                      
//                       <h3 className="text-lg font-bold mb-3 group-hover:text-orange-500 transition-colors duration-200 line-clamp-2">
//                         {post.title}
//                       </h3>
                      
//                       <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
//                         {post.excerpt}
//                       </p>
                      
//                       <div className="flex items-center justify-between">
//                         <div className="flex flex-wrap gap-1">
//                           {post.tags.slice(0, 2).map((tag) => (
//                             <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
                        
//                         <motion.div 
//                           className="text-orange-500 group-hover:text-orange-600"
//                           whileHover={{ x: 3 }}
//                         >
//                           <ArrowRight className="w-4 h-4" />
//                         </motion.div>
//                       </div>
//                     </div>
//                   </motion.article>
//                 </StaggerChild>
//               ))}
//             </div>
//           </StaggerContainer>
          
//           {/* Load More Button */}
//           <Motion.div className="text-center mt-16">
//             <motion.button
//               className="btn-3d group"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Load More Articles
//               <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
//             </motion.button>
//           </Motion.div>
//         </div>
//       </section>

//       {/* Newsletter Subscription */}
//       <section className="py-20 bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500 relative overflow-hidden">
//         <div className="absolute inset-0 grid-bg opacity-20"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <AnimatedSection>
//             <div className="max-w-2xl mx-auto text-center">
//               <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
//                 Stay Updated
//               </h2>
//               <p className="text-xl text-white/90 mb-8">
//                 Get the latest insights and trends delivered straight to your inbox.
//               </p>
              
//               <motion.div 
//                 className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-6 py-4 rounded-2xl border-0 focus:outline-none focus:ring-4 focus:ring-white/30"
//                 />
//                 <motion.button
//                   className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Subscribe
//                 </motion.button>
//               </motion.div>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Blog;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Search,
  TrendingUp,
  Code,
  Palette,
  Zap
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AnimatedSection, { AnimatedCard, StaggerContainer, StaggerChild } from '../components/AnimatedSection';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'All', icon: TrendingUp, count: 12 },
    { name: 'Web Development', icon: Code, count: 5 },
    { name: 'Design', icon: Palette, count: 4 },
    { name: 'Marketing', icon: Zap, count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '10 Web Design Trends That Will Dominate 2024',
      excerpt: 'Discover the latest web design trends that are shaping the digital landscape and learn how to implement them in your next project.',
      content: 'The world of web design is constantly evolving, and 2024 brings exciting new trends that push the boundaries of user experience and visual appeal...',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=400&fit=crop',
      tags: ['UI/UX', 'Trends', 'Design'],
      featured: true
    },
    {
      id: 2,
      title: 'The Complete Guide to React Performance Optimization',
      excerpt: 'Learn advanced techniques to make your React applications lightning fast and provide better user experiences.',
      content: 'React performance optimization is crucial for creating smooth, responsive applications that users love...',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      tags: ['React', 'Performance', 'JavaScript'],
      featured: true
    },
    {
      id: 3,
      title: 'Social Media Marketing Strategies That Actually Work',
      excerpt: 'Cut through the noise with proven social media strategies that drive real engagement and business growth.',
      content: 'In today\'s crowded social media landscape, standing out requires more than just posting regularly...',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
      tags: ['Social Media', 'Marketing', 'Strategy'],
      featured: false
    },
    {
      id: 4,
      title: 'Building Accessible Websites: A Developer\'s Guide',
      excerpt: 'Learn how to create websites that are accessible to everyone, including users with disabilities.',
      content: 'Web accessibility isn\'t just a nice-to-have feature—it\'s essential for creating inclusive digital experiences...',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop',
      tags: ['Accessibility', 'Web Development', 'UX'],
      featured: false
    },
    {
      id: 5,
      title: 'Color Psychology in Brand Design',
      excerpt: 'Understand how colors influence consumer behavior and learn to choose the perfect palette for your brand.',
      content: 'Colors have the power to evoke emotions, influence decisions, and shape brand perceptions...',
      author: 'Lisa Park',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=400&fit=crop',
      tags: ['Branding', 'Color Theory', 'Psychology'],
      featured: false
    },
    {
      id: 6,
      title: 'The Future of E-commerce: Trends to Watch',
      excerpt: 'Explore emerging e-commerce trends that will shape online shopping experiences in the coming years.',
      content: 'E-commerce continues to evolve at breakneck speed, driven by technological advances and changing consumer behaviors...',
      author: 'Alex Thompson',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      tags: ['E-commerce', 'Trends', 'Technology'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                className="inline-flex items-center space-x-2 bg-red-50 rounded-full px-6 py-3 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <TrendingUp className="w-5 h-5" style={{ color: '#c50c2b' }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#c50c2b' }}>
                  Our Blog
                </span>
              </motion.div>
              
              <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-[0.95]">
                Insights &{' '}
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Ideas</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                Stay ahead of the curve with our latest insights on web development, 
                design trends, and digital marketing strategies.
              </p>
              
              {/* Search Bar */}
              <motion.div 
                className="max-w-md mx-auto relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent bg-white shadow-sm"
                  style={{ focusRingColor: '#c50c2b' }}
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.2}>
            <h2 className="sr-only">Blog Categories</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    style={selectedCategory === category.name ? {
                      background: `linear-gradient(135deg, #c50c2b 0%, #8b0000 100%)`
                    } : {}}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="font-medium">{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.name
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-4xl font-black mb-12 text-center">
                Featured <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Articles</span>
              </h2>
            </AnimatedSection>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredPosts.map((post, index) => (
                <AnimatedCard key={post.id} delay={index * 0.2}>
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer h-full hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-white px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#c50c2b' }}>
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 group-hover:transition-colors duration-200" style={{ color: selectedCategory === post.category ? '#c50c2b' : 'inherit' }}>
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <motion.div 
                          className="flex items-center font-medium transition-colors duration-200"
                          style={{ color: '#c50c2b' }}
                          whileHover={{ x: 5 }}
                        >
                          <span className="mr-2">Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </article>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-black mb-12 text-center">
              Latest <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Articles</span>
            </h2>
          </AnimatedSection>
          
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {regularPosts.map((post, index) => (
                <StaggerChild key={post.id}>
                  <motion.article 
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer h-full hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-3 text-xs text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3 group-hover:transition-colors duration-200 line-clamp-2" style={{ color: '#c50c2b' }}>
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <motion.div 
                          className="transition-colors duration-200"
                          style={{ color: '#c50c2b' }}
                          whileHover={{ x: 3 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.article>
                </StaggerChild>
              ))}
            </div>
          </StaggerContainer>
          
          {/* Load More Button */}
          <div className="text-center mt-16">
            <motion.button
              className="px-8 py-4 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{ backgroundColor: '#c50c2b' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Articles
              <ArrowRight className="w-5 h-5 ml-3 inline transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #c50c2b 0%, #8b0000 50%, #660000 100%)` }}>
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get the latest insights and trends delivered straight to your inbox.
              </p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl border-0 focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <motion.button
                  className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;