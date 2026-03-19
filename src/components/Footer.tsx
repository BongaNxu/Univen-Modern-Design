import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Apply Now', href: '#' },
        { name: 'Student Portal', href: '#' },
        { name: 'Library', href: '#' },
        { name: 'Vacancies', href: '#' },
        { name: 'Tenders', href: '#' },
      ]
    },
    {
      title: 'Academic',
      links: [
        { name: 'Faculties', href: '#' },
        { name: 'Research', href: '#' },
        { name: 'Calendar', href: '#' },
        { name: 'Exams', href: '#' },
        { name: 'Short Courses', href: '#' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'IT Helpdesk', href: '#' },
        { name: 'Campus Security', href: '#' },
        { name: 'Health Services', href: '#' },
        { name: 'Counseling', href: '#' },
        { name: 'Disability Unit', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img 
              src="https://www.univen.ac.za/wp-content/uploads/2021/04/univen-logo.png" 
              alt="University of Venda" 
              className="h-20 mb-8 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              The University of Venda is a comprehensive university situated in Thohoyandou, Limpopo Province, South Africa. We are committed to excellence in teaching, research, and community engagement.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 p-3 rounded-full hover:bg-univen-gold hover:text-univen-blue transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold mb-8 border-b border-white/10 pb-4">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center group text-sm">
                      <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-white/10">
          <div className="flex items-center space-x-4">
            <div className="bg-univen-blue p-3 rounded-xl">
              <MapPin size={24} className="text-univen-gold" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Address</p>
              <p className="text-sm">University Road, Thohoyandou, 0950</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-univen-blue p-3 rounded-xl">
              <Phone size={24} className="text-univen-gold" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Phone</p>
              <p className="text-sm">+27 15 962 8000</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-univen-blue p-3 rounded-xl">
              <Mail size={24} className="text-univen-gold" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</p>
              <p className="text-sm">info@univen.ac.za</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} University of Venda. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
