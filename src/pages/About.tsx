import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { Award, Users, Globe, BookOpen } from 'lucide-react';

const About = () => {
  const impacts = [
    {
      icon: <Award className="text-univen-gold" size={32} />,
      title: "Academic Excellence",
      desc: "Consistently ranked among the top emerging universities in Southern Africa."
    },
    {
      icon: <Globe className="text-univen-gold" size={32} />,
      title: "Global Research",
      desc: "Leading research in rural development, water security, and indigenous knowledge."
    },
    {
      icon: <Users className="text-univen-gold" size={32} />,
      title: "Community Engagement",
      desc: "Directly impacting local communities through sustainable development projects."
    },
    {
      icon: <BookOpen className="text-univen-gold" size={32} />,
      title: "Future Leaders",
      desc: "Our alumni occupy key positions in government and international corporations."
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="About Univen" 
        subtitle="A legacy of excellence and transformation since 1982."
        image="https://nebworksmedia.com/wp-content/uploads/2026/03/server-room.jpg"
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
                Our <span className="text-univen-blue">History</span> & Mission
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  The University of Venda celebrated its 40th Anniversary in the year 2022. Since its inception, Univen has been a beacon of hope and academic excellence in the Limpopo province and beyond.
                </p>
                <p>
                  Over the four decades of its existence, the University produced many graduates who held positions of responsibility and influence in political, corporate, and society in general. Our commitment remains to produce leaders who are locally relevant yet globally competitive.
                </p>
                <p>
                  Our mission is to produce graduates who are locally relevant and globally competitive, and to generate knowledge that addresses the challenges of our society.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {impacts.map((impact, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                  <div className="mb-6">{impact.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-univen-blue">{impact.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{impact.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
