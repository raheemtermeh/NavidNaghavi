// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

// کامپوننت آیکون متحرک همبرگر به ضربدر
const AnimatedHamburgerIcon = ({ isOpen, toggle }) => (
    <button onClick={toggle} className="relative z-50 w-8 h-8 focus:outline-none">
        <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="absolute h-0.5 w-8 bg-white top-2"
        />
        <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="absolute h-0.5 w-8 bg-white top-4"
        />
        <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="absolute h-0.5 w-8 bg-white top-6"
        />
    </button>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: 'about', text: 'درباره من' },
        { to: 'services', text: 'خدمات' },
        { to: 'stats', text: 'آمار' },
        { to: 'contact', text: 'تماس' },
    ];

    return (
        <>
            <nav className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${scrolled ? 'bg-dark/70 shadow-2xl backdrop-blur-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* لوگو */}
                    <Link to="top" smooth={true} duration={500} className="flex items-center gap-3 cursor-pointer">
                        <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-full font-black text-2xl text-dark">N</div>
                        <span className="text-xl font-bold text-white hidden sm:block">نوید نقوی</span>
                    </Link>

                    {/* لینک‌های دسکتاپ */}
                    <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                onSetActive={() => setActiveLink(link.to)}
                                className="relative text-lg font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                {link.text}
                                {activeLink === link.to && (
                                    <motion.div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent" layoutId="underline" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* دکمه و منوی موبایل */}
                    <div className="lg:hidden">
                        <AnimatedHamburgerIcon isOpen={isMobileMenuOpen} toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                    </div>
                </div>
            </nav>

            {/* منوی تمام صفحه موبایل */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-dark z-30 flex flex-col items-center justify-center space-y-10"
                    >
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.to}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-semibold text-gray-300 hover:text-accent transition-colors"
                                >
                                    {link.text}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;