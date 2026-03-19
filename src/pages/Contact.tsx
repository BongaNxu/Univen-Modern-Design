import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to help. Get in touch with the University of Venda."
        image="https://nebworksmedia.com/wp-content/uploads/2026/02/about-us-univen.jpg"
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl text-slate-900 mb-8 leading-tight">
                Get in <span className="text-univen-blue">Touch</span>
              </h2>
              <p className="text-slate-600 text-lg mb-12">
                Whether you're a prospective student, a current student, or a member of the community, we're here to answer your questions.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-univen-blue/5 p-4 rounded-2xl">
                    <MapPin className="text-univen-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Our Location</h3>
                    <p className="text-slate-500">University Road, Thohoyandou, 0950, Limpopo, South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-univen-blue/5 p-4 rounded-2xl">
                    <Phone className="text-univen-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Phone Number</h3>
                    <p className="text-slate-500">+27 15 962 8000</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-univen-blue/5 p-4 rounded-2xl">
                    <Mail className="text-univen-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Email Address</h3>
                    <p className="text-slate-500">info@univen.ac.za</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-8 text-univen-blue">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-univen-blue/20 transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-univen-blue/20 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-univen-blue/20 transition-all" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-univen-blue/20 transition-all" placeholder="Your message here..."></textarea>
                </div>
                <button className="w-full bg-univen-blue text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-univen-blue/90 transition-all">
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
