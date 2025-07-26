// src/components/AboutMe.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle'; // این کامپوننت هم باید برای تم تیره بهینه شود
import navidIMG from '../../public/navid.jpg';

const AboutMe = () => {
  return (
    // حذف شد: bg-light bg-opacity-5 تا پس‌زمینه متحرک دیده شود
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        {/* این کامپوننت باید متن سفید داشته باشد */}
        <SectionTitle>سفری به دنیای کسب و کار مدرن</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* بخش تصویر بدون تغییر باقی می‌ماند چون استایلش مناسب است */}
          <motion.div 
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-6xl transform -rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105"></div>
              <img 
                src={navidIMG} 
                alt="نوید نقوی" 
                className="absolute inset-0 w-full h-full object-cover rounded-6xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* بخش متن با رنگ‌های جدید و خوانا روی پس‌زمینه تیره */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* تغییر کرد: text-dark به text-white */}
            <h3 className="text-3xl font-bold text-white mb-4">
              من <span className="text-accent">نوید نقوی</span> هستم، راهنمای شما در مسیر موفقیت.
            </h3>
            {/* تغییر کرد: text-gray-600 به text-gray-300 */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              باور من این است که هر فردی با داشتن نقشه راه درست و ابزارهای مناسب، می‌تواند کسب‌وکار خود را به سطوح بین‌المللی برساند. من اینجا هستم تا این نقشه راه را بر اساس جدیدترین متدهای روز دنیا و با تمرکز بر پتانسیل‌های منحصر به فرد شما، طراحی کنم.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-accent text-2xl mt-1 mr-4">✓</span>
                {/* تغییر کرد: text-gray-700 به text-gray-300 */}
                <p className="text-gray-300"><strong>چشم‌انداز ما:</strong> تبدیل شدن به انتخاب اول کارآفرینان ایرانی برای ورود به بازارهای جهانی و کسب درآمد دلاری.</p>
              </div>
              <div className="flex items-start">
                <span className="text-accent text-2xl mt-1 mr-4">✓</span>
                 {/* تغییر کرد: text-gray-700 به text-gray-300 */}
                <p className="text-gray-300"><strong>ماموریت ما:</strong> ارائه آموزش‌های کاربردی، مشاوره‌های دقیق و برگزاری سمینارهایی که جرئت بزرگ فکر کردن و اقدام کردن را در شما ایجاد کند.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;