// src/components/StatsSection.jsx
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaUsers, FaProjectDiagram, FaRegSmile } from 'react-icons/fa';
import { motion } from 'framer-motion';

const stats = [
    { icon: <FaUserGraduate />, end: 500, label: 'دانشجوی موفق' },
    { icon: <FaUsers />, end: 40, label: 'سمینار برگزار شده' },
    { icon: <FaProjectDiagram />, end: 120, label: 'پروژه موفق تجاری' },
    { icon: <FaRegSmile />, end: 98, label: 'رضایت مشتریان (%)', suffix: '%' },
];

const StatsSection = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });
  
    return (
      <section id="stats" className="py-24" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4 rounded-4xl backdrop-blur-sm bg-black/20"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div 
                  className="flex justify-center mb-4 text-7xl text-accent"
                  // انیمیشن شناور مداوم
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {stat.icon}
                </motion.div>
                <h3 className="text-5xl font-bold text-white">
                  {inView ? <CountUp end={stat.end} duration={3} suffix={stat.suffix || '+'} /> : '0'}
                </h3>
                <p className="text-lg text-gray-300 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default StatsSection;