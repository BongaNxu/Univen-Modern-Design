import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { Microscope, Globe, Droplets, Leaf } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: <Droplets className="text-univen-gold" size={32} />,
      title: "Water Security",
      desc: "Developing sustainable water management solutions for rural and urban areas."
    },
    {
      icon: <Leaf className="text-univen-gold" size={32} />,
      title: "Indigenous Knowledge Systems",
      desc: "Preserving and applying traditional knowledge to modern challenges."
    },
    {
      icon: <Microscope className="text-univen-gold" size={32} />,
      title: "Health and Biotechnology",
      desc: "Advancing medical research and biotechnological innovations."
    },
    {
      icon: <Globe className="text-univen-gold" size={32} />,
      title: "Sustainable Development",
      desc: "Promoting economic growth while protecting our natural resources."
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Research" 
        subtitle="Addressing local challenges with global research excellence."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl text-slate-900 mb-6">Our Research Impact</h2>
            <p className="text-slate-600 text-lg">
              Univen is committed to research that makes a tangible difference in the lives of people in our region and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="mb-6">{area.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-univen-blue">{area.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
