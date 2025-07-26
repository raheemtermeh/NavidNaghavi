// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaDollarSign, FaUsers, FaArrowLeft } from 'react-icons/fa';

const services = [
    {
      name: 'بیزنس کوچینگ VIP',
      description: 'جلسات خصوصی و متمرکز برای تدوین استراتژی، افزایش فروش و بهینه‌سازی فرآیندهای کسب‌وکار شما.',
      icon: <FaChalkboardTeacher />,
    },
    {
      name: 'آکادمی درآمد دلاری',
      description: 'یک دوره جامع و پروژه‌محور برای یادگیری روش‌های عملی و به‌روز جهت ورود به بازارهای جهانی و کسب درآمد ارزی.',
      icon: <FaDollarSign />,
    },
    {
      name: 'سمینارهای تخصصی',
      description: 'کارگاه‌های آموزشی گروهی و وبینارهای زنده برای یادگیری مهارت‌های کلیدی در حوزه‌های بازاریابی دیجیتال، فروش و رهبری.',
      icon: <FaUsers />,
    },
];

const containerVariants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">یک سرمایه‌گذاری برای آینده شما</h2>
          <div className="flex justify-center">
              <div className="w-24 h-1 bg-accent rounded-full"></div>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="rounded-4xl p-8 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 25px rgba(212, 175, 55, 0.5)", // سایه طلایی
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="text-6xl text-accent mb-6"
                whileHover={{ rotate: [0, 20, -20, 0], transition: { duration: 0.5, repeat: Infinity } }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;