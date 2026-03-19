import React from 'react';
import PageHeader from '../components/PageHeader';
import { NewsSection } from '../components/NewsSection';

const News = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="News & Announcements" 
        subtitle="Stay updated with the latest happenings at the University of Venda."
        image="https://www.shutterstock.com/shutterstock/photos/561549838/display_1500/stock-photo-newspapers-561549838.jpg"
      />
      
      <NewsSection />
      
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl text-slate-900 mb-6">Media Gallery</h2>
            <p className="text-slate-600 text-lg">
              A glimpse into life at Univen through our latest events and campus activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-2xl overflow-hidden group"
              >
                <img 
                  src={`https://picsum.photos/seed/univen-${i}/800/600`} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-univen-blue/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold">View Image</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

import { motion } from 'motion/react';

export default News;
