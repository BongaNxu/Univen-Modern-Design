import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { GraduationCap, Stethoscope, Briefcase, Microscope, Scale, Landmark } from 'lucide-react';

const Faculties = () => {
  const faculties = [
    {
      icon: <GraduationCap className="text-univen-gold" size={40} />,
      title: "Faculty of Humanities, Social Sciences and Education",
      desc: "Preparing the next generation of educators, social workers, and humanities scholars."
    },
    {
      icon: <Stethoscope className="text-univen-gold" size={40} />,
      title: "Faculty of Health Sciences",
      desc: "Training medical professionals to serve the health needs of our communities."
    },
    {
      icon: <Briefcase className="text-univen-gold" size={40} />,
      title: "Faculty of Management, Commerce and Law",
      desc: "Developing leaders in business, economics, and the legal profession."
    },
    {
      icon: <Microscope className="text-univen-gold" size={40} />,
      title: "Faculty of Science, Engineering and Agriculture",
      desc: "Advancing knowledge in STEM fields and sustainable agricultural practices."
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Faculties" 
        subtitle="Our faculties are at the heart of our academic excellence and research."
        image="https://nebworksmedia.com/wp-content/uploads/2026/03/0001083475_resized_healthsciencesbuildinguniven1022.jpg"
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {faculties.map((faculty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="mb-8 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-univen-blue transition-colors">
                  <div className="group-hover:text-white transition-colors">{faculty.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-univen-blue">{faculty.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{faculty.desc}</p>
                <button className="mt-8 text-univen-blue font-bold flex items-center hover:text-univen-gold transition-colors">
                  Explore Faculty
                  <GraduationCap className="ml-2" size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculties;
