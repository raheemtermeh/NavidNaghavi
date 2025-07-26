// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    // حذف پس‌زمینه ثابت و اضافه کردن پدینگ
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle>آماده شروع یک تحول هستید؟</SectionTitle>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          برای رزرو جلسه مشاوره خصوصی یا اطلاع از نزدیک‌ترین سمینارها، همین حالا اقدام کنید. من و تیمم آماده‌ایم تا شما را در این مسیر همراهی کنیم.
        </p>

        {/* کارت شیشه‌ای برای تمرکز بیشتر */}
        <motion.div
          className="max-w-lg mx-auto p-8 rounded-4xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">راه‌های ارتباطی</h3>
          
          {/* دکمه اصلی برای اقدام */}
          <a 
            href="mailto:info@navidnaghavi.com" 
            className="inline-block w-full bg-accent text-dark font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-dark hover:scale-105 mb-8"
          >
            ارسال ایمیل برای مشاوره
          </a>

          <div className="flex justify-center items-center gap-8">
            {/* هماهنگ کردن رنگ هاور با رنگ accent */}
            <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-300 hover:text-accent transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-300 hover:text-accent transition-colors duration-300">
              <FaTelegram />
            </a>
            <a href="https://linkedin.com/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-300 hover:text-accent transition-colors duration-300">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;