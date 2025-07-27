import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your digital services. Can we discuss my project?");
    window.open(`https://wa.me/15551234567?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
      }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
    </motion.button>
  );
};

export default WhatsAppButton;