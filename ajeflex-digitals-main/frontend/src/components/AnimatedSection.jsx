import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  duration = 0.6 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: -50 },
    right: { y: 0, x: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {}}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedCard = ({ children, className = '', delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1 
      } : {}}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChild = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;