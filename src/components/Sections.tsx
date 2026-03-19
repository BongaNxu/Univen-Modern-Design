import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Globe, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://nebworksmedia.com/wp-content/uploads/2026/03/stock-photo-successful-black-female-student-showing-thumb-up-outdoor-in-summer-in-city-2462098193.jpg" 
                alt="Univen Campus Life" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-univen-gold p-8 rounded-3xl shadow-xl z-20 hidden md:block">
              <p className="text-5xl font-bold text-univen-blue mb-1">40+</p>
              <p className="text-univen-blue font-bold text-sm uppercase tracking-wider">Years of Impact</p>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-univen-blue/5 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-univen-blue font-bold tracking-widest uppercase text-sm mb-4 block">About the University</span>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-8 leading-tight">
              A Legacy of Excellence and <span className="text-univen-blue">Transformation</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                The University of Venda celebrated its 40th Anniversary in the year 2022. Since its inception, Univen has been a beacon of hope and academic excellence in the Limpopo province and beyond.
              </p>
              <p>
                Over the four decades of its existence, the University produced many graduates who held positions of responsibility and influence in political, corporate, and society in general. Our commitment remains to produce leaders who are locally relevant yet globally competitive.
              </p>
            </div>
            <div className="mt-10">
              <button className="bg-univen-blue text-white px-8 py-4 rounded-full font-bold hover:bg-univen-blue/90 transition-all flex items-center group">
                Read More About Our History
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ImpactSection = () => {
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
    <section className="py-24 bg-univen-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">Univen's Impact</h2>
          <p className="text-slate-300 text-lg">
            We are more than just an academic institution; we are a catalyst for change and a driver of societal progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="mb-6">{impact.icon}</div>
              <h3 className="text-xl font-bold mb-4">{impact.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{impact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdministrativeInfo = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="bg-univen-blue/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-univen-blue" size={40} />
            </div>
            <h2 className="text-3xl text-slate-900 mb-4">Official Debt Collectors</h2>
            <p className="text-slate-600">
              Important notice regarding official communication from the University's appointed debt collection agencies.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
              <h3 className="font-bold text-univen-blue text-lg mb-2">Hahn Collections</h3>
              <p className="text-slate-500 text-sm mb-4">Appointed Official Agency</p>
              <div className="h-1 w-12 bg-univen-gold rounded-full"></div>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50">
              <h3 className="font-bold text-univen-blue text-lg mb-2">Boffin and Fundi</h3>
              <p className="text-slate-500 text-sm mb-4">Appointed Official Agency</p>
              <div className="h-1 w-12 bg-univen-gold rounded-full"></div>
            </div>
            <div className="md:col-span-2 bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="text-blue-800 text-sm font-medium">
                Note: Communication from these agencies is valid and authorized by the University of Venda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection, ImpactSection, AdministrativeInfo };
