import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { UrgentNotice, NewsSection } from './components/NewsSection';
import { AboutSection, ImpactSection, AdministrativeInfo } from './components/Sections';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-univen-gold selection:text-univen-blue">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-univen-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
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
      </main>

      <Footer />
    </div>
  );
}
