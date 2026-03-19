import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-[400px] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={image || "https://nebworksmedia.com/wp-content/uploads/2026/03/ousa-chea-gKUC4TMhOiY-unsplash-1-scaled-1.jpg"} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-univen-blue/70 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl text-white mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-slate-200 max-w-2xl">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
