import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { ShieldCheck, Monitor, Heart, Coffee, Bus, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ShieldCheck className="text-univen-gold" size={32} />,
      title: "Campus Security",
      desc: "24/7 security services to ensure a safe and secure environment for all."
    },
    {
      icon: <Monitor className="text-univen-gold" size={32} />,
      title: "IT Support",
      desc: "Comprehensive technical support for students and staff."
    },
    {
      icon: <Heart className="text-univen-gold" size={32} />,
      title: "Health Services",
      desc: "On-campus clinic providing primary healthcare and counseling."
    },
    {
      icon: <Coffee className="text-univen-gold" size={32} />,
      title: "Student Life",
      desc: "Clubs, societies, and sports activities to enhance your university experience."
    },
    {
      icon: <Bus className="text-univen-gold" size={32} />,
      title: "Transport",
      desc: "Reliable shuttle services connecting campus to key locations."
    },
    {
      icon: <GraduationCap className="text-univen-gold" size={32} />,
      title: "Career Services",
      desc: "Guidance and support for your future career path."
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Services" 
        subtitle="Supporting your academic journey with comprehensive services."
        image="https://nebworksmedia.com/wp-content/uploads/2026/03/Blue-White-Modern-Health-Care-Email-Header-2400-×-900px-1-1.png"
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-univen-blue">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
