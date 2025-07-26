// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-scroll';
import ArcDivider from './ArcDivider';
import { motion } from 'framer-motion';
import { FaPlayCircle } from 'react-icons/fa';
// کامپوننت کوچک برای نمایش آواتار مشتریان


const HeroSection = () => {
    return (
        <section className="relative pb-10 bg-gradient-to-br from-dark to-primary flex items-center h-screen overflow-hidden">
            <div className="container mx-auto px-6 z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* ستون متن و محتوا */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl lg:text-6xl font-black mb-4 text-white leading-tight">
                            آینده کسب‌وکارت را <span className="text-accent">امروز</span> بساز.
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-xl">
                            با کوچینگ تخصصی کسب‌وکار، مسیر خود را برای رسیدن به درآمدهای دلاری و موفقیت پایدار هموار کنید.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Link to="contact" smooth={true} duration={500} offset={-70} className="cursor-pointer inline-block bg-accent text-dark font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105">
                                رزرو جلسه مشاوره
                            </Link>
                            <a href="#" className="flex items-center gap-3 text-white font-semibold hover:text-accent transition-colors">
                                <FaPlayCircle className="text-2xl" />
                                تماشای ویدیوی معرفی
                            </a>
                        </div>
                       
                    </motion.div>

                    {/* ستون گرافیکی متحرک */}
                    <div className="hidden lg:block relative w-full h-96">
                        {/* المان‌های شناور */}
                        <motion.div
                            className="absolute top-10 right-20 w-32 h-32 bg-accent rounded-full opacity-50"
                            animate={{ y: [-10, 10, -10], scale: [1, 1.1, 1] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-10 left-10 w-48 h-48 border-[20px] border-white/20 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                         <motion.div
                            className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-2xl"
                            animate={{ x: [-15, 15, -15], scale: [1, 0.9, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </div>


            <div className="absolute bottom-[-1px] w-full z-20 ">
                <ArcDivider color="#0d1117" />
            </div>
        </section>
    );
};

export default HeroSection;