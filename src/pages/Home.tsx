import React from 'react';
import Hero from '../components/Hero';
import { UrgentNotice, NewsSection } from '../components/NewsSection';
import { AboutSection, ImpactSection, AdministrativeInfo } from '../components/Sections';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <>
      <Hero />
      <UrgentNotice />
      <AboutSection />
      <ImpactSection />
      <NewsSection />
      <AdministrativeInfo />
      
      {/* Call to Action Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-univen-blue">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl text-white mb-8">Ready to start your journey?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Join a community of scholars dedicated to creating a better future. Applications for the 2027 academic year are now open.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-univen-gold text-univen-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all shadow-2xl">
                Apply Online Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-univen-blue transition-all">
                Contact Admissions
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
