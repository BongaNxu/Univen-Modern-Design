import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[900px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://nebworksmedia.com/wp-content/uploads/2026/03/server-farm-team-leader.jpg" 
          // src="https://nebworksmedia.com/wp-content/uploads/2026/03/ousa-chea-gKUC4TMhOiY-unsplash-1-scaled-1.jpg" 
          alt="University Campus" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-univen-blue/90 via-univen-blue/60 to-transparent"></div> 
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-univen-gold text-univen-blue text-xs font-bold uppercase tracking-widest mb-6">
              Welcome to Univen
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
              Creating Future <span className="text-univen-gold">leaders</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              Empowering the next generation of innovators, thinkers, and leaders through excellence in teaching, research, and community engagement.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-univen-gold text-univen-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center group shadow-2xl">
                Explore Programs
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center group">
                <PlayCircle className="mr-2" />
                Campus Tour
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      
      {/* Quick Stats Overlay */}
      <div className="absolute bottom-0 right-0 z-10 hidden lg:block bg-white p-8 rounded-tl-3xl shadow-2xl max-w-md">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-3xl font-bold text-univen-blue">40+</p>
            <p className="text-sm text-slate-500 font-medium">Years of Excellence</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-univen-blue">15k+</p>
            <p className="text-sm text-slate-500 font-medium">Active Students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
