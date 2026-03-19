import React from 'react';
import { AlertCircle, Calendar, ArrowRight, Bell, FileText } from 'lucide-react';
import { motion } from 'motion/react';

const UrgentNotice = () => {
  return (
    <div className="bg-univen-accent text-white py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full animate-pulse">
            <AlertCircle size={24} />
          </div>
          <div>
            <p className="font-bold text-lg">URGENT: FINAL CLASS TIMETABLE</p>
            <p className="text-sm text-white/80">Implementation starts from 16 February 2026. Please check your portals.</p>
          </div>
        </div>
        <button className="bg-white text-univen-accent px-6 py-2 rounded-full font-bold text-sm hover:bg-slate-100 transition-all flex items-center group">
          View Timetable
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
        </button>
      </div>
    </div>
  );
};

const NewsSection = () => {
  const news = [
    {
      date: '2 Feb 2026',
      title: 'Notice to Applicants, Staff, and Students',
      category: 'General Notice',
      excerpt: 'Important information regarding the upcoming academic registration and campus safety protocols.',
      image: 'https://nebworksmedia.com/wp-content/uploads/2026/03/stock-photo-black-female-student-writing-notes-while-teacher-is-explaining-lecture-on-a-class-in-the-classroom-1955306809.jpg'
    },
    {
      date: '15 Jan 2026',
      title: 'Univen Research Symposium 2026',
      category: 'Research',
      excerpt: 'Join us for the annual showcase of groundbreaking research from our diverse faculties.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
    },
    {
      date: '10 Jan 2026',
      title: 'New Faculty of Health Sciences Building',
      category: 'Infrastructure',
      excerpt: 'Construction begins on the state-of-the-art facility to enhance medical education in Venda.',
      image: 'https://nebworksmedia.com/wp-content/uploads/2026/03/0001083475_resized_healthsciencesbuildinguniven1022.jpg'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-univen-blue font-bold tracking-widest uppercase text-sm mb-2 block">Stay Informed</span>
            <h2 className="text-4xl md:text-5xl text-slate-900">UNIVEN Announcements</h2>
          </div>
          <button className="text-univen-blue font-bold flex items-center hover:text-univen-gold transition-colors group">
            View All News
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-univen-blue">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-slate-400 text-sm mb-3">
                  <Calendar size={14} className="mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-univen-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  {item.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-univen-blue font-bold text-sm hover:underline">
                  Read More
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { ChevronRight } from 'lucide-react';

export { UrgentNotice, NewsSection };
