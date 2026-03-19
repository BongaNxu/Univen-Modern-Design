import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { Book, Search, Monitor, Coffee } from 'lucide-react';

const Library = () => {
  const libraryServices = [
    {
      icon: <Book className="text-univen-gold" size={32} />,
      title: "Extensive Collection",
      desc: "Access to thousands of physical and digital resources across all disciplines."
    },
    {
      icon: <Search className="text-univen-gold" size={32} />,
      title: "Research Support",
      desc: "Expert librarians available to assist with literature searches and referencing."
    },
    {
      icon: <Monitor className="text-univen-gold" size={32} />,
      title: "Digital Resources",
      desc: "24/7 access to online databases, journals, and e-books."
    },
    {
      icon: <Coffee className="text-univen-gold" size={32} />,
      title: "Study Spaces",
      desc: "Quiet zones and collaborative spaces designed for focused learning."
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Library" 
        subtitle="Your gateway to knowledge and academic success."
        image="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl text-slate-900 mb-8 leading-tight">
                A Hub for <span className="text-univen-blue">Learning</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  The University of Venda Library is a vital resource for our academic community. We provide a wide range of services and resources to support teaching, learning, and research.
                </p>
                <p>
                  Our collection includes over 200,000 books, as well as access to hundreds of online databases and thousands of electronic journals.
                </p>
                <p>
                  We are committed to providing a welcoming and supportive environment for all our users.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {libraryServices.map((service, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-univen-blue">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;
