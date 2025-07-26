// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { FaInstagram, FaTelegram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { to: 'about', text: 'درباره من' },
    { to: 'services', text: 'خدمات' },
    { to: 'contact', text: 'تماس' },
  ];
  
  const socialLinks = [
    { href: '#', icon: <FaInstagram /> },
    { href: '#', icon: <FaTelegram /> },
    { href: '#', icon: <FaLinkedin /> },
    { href: '#', icon: <FaEnvelope /> },
  ];

  return (
    // حذف پس‌زمینه ثابت bg-dark
    <footer className="pt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* اصلاح ساختار گرید به چهار ستون واقعی */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8 text-center md:text-right">
          
          {/* Column 1: Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">نوید نقوی</h3>
            <p className="text-gray-400">راهنمای شما برای ساختن کسب‌وکاری جهانی و درآمدی پایدار.</p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} smooth={true} duration={500} offset={-70} className="text-gray-400 hover:text-accent transition-colors cursor-pointer">{link.text}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 3: Contact Info (ستون جدید) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">اطلاعات تماس</h4>
            <ul className="space-y-3 text-gray-400">
                <li className="flex items-center justify-center md:justify-start">
                    <FaEnvelope className="ml-3 text-accent" />
                    <span>info@navidnaghavi.com</span>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                    <FaPhone className="ml-3 text-accent" />
                    <span>(اختیاری) 989123456789+</span>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                    <FaMapMarkerAlt className="ml-3 text-accent" />
                    <span>(اختیاری) تهران، ایران</span>
                </li>
            </ul>
          </motion.div>

          {/* Column 4: Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">شبکه‌های اجتماعی</h4>
            <div className="flex space-x-5 space-x-reverse justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-2xl text-gray-400 hover:text-accent hover:scale-110 transform transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-500">
          <p>&copy; {currentYear} نوید نقوی. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;