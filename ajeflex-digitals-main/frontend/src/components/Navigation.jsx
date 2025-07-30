// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { mockData } from '../mock';
// import '../index.css';

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const isActiveRoute = (path) => {
//     return location.pathname === path;
//   };

//   const serviceLinks = [
//     { name: 'Web Development', href: '/services/web-development' },
//     { name: 'Graphic Design', href: '/services/graphic-design' },
//     { name: 'Social Media Growth', href: '/services/social-media-growth' }
//   ];

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//       isScrolled ? 'nav-sticky' : 'bg-transparent'
//     }`}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3 group">
//             <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center service-icon-3d group-hover:scale-110 transition-transform duration-300">
//               <span className="text-primary-foreground font-black text-xl">A</span>
//             </div>
//             <span className="text-xl font-black text-foreground group-hover:text-primary transition-colors duration-300">
//               {mockData.company.name}
//             </span>
//           </Link>


//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               to="/"
//               className={`font-semibold transition-all duration-300 hover:text-orange-500 ${
//                 isActiveRoute('/') ? 'text-orange-500' : 'text-gray-700'
//               }`}
//             >
//               Home
//             </Link>
            
//             <Link
//               to="/about"
//               className={`font-semibold transition-all duration-300 hover:text-orange-500 ${
//                 isActiveRoute('/about') ? 'text-orange-500' : 'text-gray-700'
//               }`}
//             >
//               About
//             </Link>

//             <div
//               className="relative"
//               onMouseEnter={() => setShowServicesDropdown(true)}
//               onMouseLeave={() => setShowServicesDropdown(false)}
//             >
//               <button className={`flex items-center space-x-1 font-semibold transition-all duration-300 hover:text-orange-500 ${
//                 location.pathname.includes('/services') ? 'text-orange-500' : 'text-gray-700'
//               }`}>
//                 <span>Services</span>
//                 <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
//                   showServicesDropdown ? 'rotate-180' : ''
//                 }`} />
//               </button>
              
//               {showServicesDropdown && (
//                 <div className="absolute top-full left-0 mt-3 w-64 glass rounded-2xl border border-white/20 py-3 shadow-xl">
//                   {serviceLinks.map((service) => (
//                     <Link
//                       key={service.name}
//                       to={service.href}
//                       className="block px-6 py-3 text-gray-700 hover:bg-white/10 hover:text-orange-500 transition-all duration-300 font-medium"
//                     >
//                       {service.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/portfolio"
//               className={`font-semibold transition-all duration-300 hover:text-orange-500 ${
//                 isActiveRoute('/portfolio') ? 'text-orange-500' : 'text-gray-700'
//               }`}
//             >
//               Portfolio
//             </Link>

//               <Link
//               to="/blog"
//               className={`font-semibold transition-all duration-300 hover:text-orange-500 ${
//                 isActiveRoute('/blog') ? 'text-orange-500' : 'text-gray-700'
//               }`}
//             >
//               Blog
//             </Link>

//             <Link
//               to="/contact"
//               className={`font-semibold transition-all duration-300 hover:text-orange-500 ${
//                 isActiveRoute('/contact') ? 'text-orange-500' : 'text-gray-700'
//               }`}
//             >
//               Contact
//             </Link>
            
//             {/* CTA Button */}
//             <Link to="/contact" className="btn-3d ml-4 group">
//               Get Started
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={toggleMobileMenu}
//             className="md:hidden p-3 rounded-2xl glass hover:bg-white/10 transition-all duration-300"
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden glass border border-white/20 rounded-2xl mt-4 p-6">
//             <div className="flex flex-col space-y-6">
//               <Link
//                 to="/"
//                 className={`font-semibold transition-colors duration-300 ${
//                   isActiveRoute('/') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>
              
//               <Link
//                 to="/about"
//                 className={`font-semibold transition-colors duration-300 ${
//                   isActiveRoute('/about') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 About
//               </Link>

//               <div>
//                 <p className="font-semibold text-gray-700 mb-3">Services</p>
//                 <div className="pl-4 space-y-3">
//                   {serviceLinks.map((service) => (
//                     <Link
//                       key={service.name}
//                       to={service.href}
//                       className="block text-gray-600 hover:text-orange-500 transition-colors duration-300"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {service.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               <Link
//                 to="/portfolio"
//                 className={`font-semibold transition-colors duration-300 ${
//                   isActiveRoute('/portfolio') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Portfolio
//               </Link>

//               <Link
//                 to="/contact"
//                 className={`font-semibold transition-colors duration-300 ${
//                   isActiveRoute('/contact') ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </Link>
              
//               <Link 
//                 to="/contact" 
//                 className="btn-3d w-full text-center mt-6"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { mockData } from '../mock';
import '../index.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const isActiveRoute = (path) => location.pathname === path;

  const serviceLinks = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Graphic Design', href: '/services/graphic-design' },
    { name: 'Social Media Growth', href: '/services/social-media-growth' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'nav-sticky' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className=" rounded-2xl flex items-center justify-center  group-hover:scale-110 transition-transform duration-300">
              <img
                src="AjeFlexwhite.png"
                alt="Ajeflex Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
            <span className="text-xl font-black text-foreground group-hover:text-primary transition-colors duration-300">
              {mockData.company.name}
            </span>
          </Link>


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-semibold transition-all duration-300 hover:text-primary ${isActiveRoute('/') ? 'text-primary' : 'text-foreground'}`}>
              Home
            </Link>
            <Link to="/about" className={`font-semibold transition-all duration-300 hover:text-primary ${isActiveRoute('/about') ? 'text-primary' : 'text-foreground'}`}>
              About
            </Link>

            <div className="relative" onMouseEnter={() => setShowServicesDropdown(true)} onMouseLeave={() => setShowServicesDropdown(false)}>
              <button className={`flex items-center space-x-1 font-semibold transition-all duration-300 hover:text-primary ${location.pathname.includes('/services') ? 'text-primary' : 'text-foreground'}`}>
                <span> Services</span> 
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showServicesDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showServicesDropdown && (
                <div className="absolute top-full left-0 mt-3 w-64 glass rounded-2xl border border-border py-3 shadow-xl bg-background">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-6 py-3 text-foreground hover:text-primary hover:bg-muted transition-all duration-300 font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/portfolio" className={`font-semibold transition-all duration-300 hover:text-primary ${isActiveRoute('/portfolio') ? 'text-primary' : 'text-foreground'}`}>
              Portfolio
            </Link>
            <Link to="/blog" className={`font-semibold transition-all duration-300 hover:text-primary ${isActiveRoute('/blog') ? 'text-primary' : 'text-foreground'}`}>
              Blog
            </Link>
            <Link to="/contact" className={`font-semibold transition-all duration-300 hover:text-primary ${isActiveRoute('/contact') ? 'text-primary' : 'text-foreground'}`}>
              Contact
            </Link>

            {/* CTA */}
            <Link to="/start" className="btn-3d ml-4 group">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-3 rounded-2xl glass hover:bg-muted transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden glass border border-border rounded-2xl mt-4 p-6 bg-background">
            <div className="flex flex-col space-y-6">
              <Link to="/" className={`font-semibold transition-colors duration-300 ${isActiveRoute('/') ? 'text-primary' : 'text-foreground hover:text-primary'}`} onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className={`font-semibold transition-colors duration-300 ${isActiveRoute('/about') ? 'text-primary' : 'text-foreground hover:text-primary'}`} onClick={() => setIsOpen(false)}>
                About
              </Link>

              <div>
                <p className="font-semibold text-foreground mb-3">Services</p>
                <div className="pl-4 space-y-3">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/portfolio" className={`font-semibold transition-colors duration-300 ${isActiveRoute('/portfolio') ? 'text-primary' : 'text-foreground hover:text-primary'}`} onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>

              <Link to="/contact" className={`font-semibold transition-colors duration-300 ${isActiveRoute('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'}`} onClick={() => setIsOpen(false)}>
                Contact
              </Link>

              <Link to="/start" className="btn-3d w-full text-center mt-6" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
