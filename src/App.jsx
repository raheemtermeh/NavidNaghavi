// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import StatsSection from './components/StatsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div id="top">
      {/* Navbar و HeroSection خارج از محدوده پس‌زمینه متحرک قرار دارند */}
      <Navbar />
      <main>
        <HeroSection />
      </main>

      {/* یک DIV جدید به عنوان "Wrapper" برای بقیه سایت ایجاد می‌کنیم.
        پس‌زمینه متحرک فقط داخل این Wrapper اعمال می‌شود.
      */}
      <div className="relative">
        <AnimatedBackground />

        {/* تمام کامپوننت‌های دیگر داخل این Wrapper قرار می‌گیرند.
          این کامپوننت‌ها باید پس‌زمینه شفاف داشته باشند تا AnimatedBackground دیده شود.
        */}
        <AboutMe />
        <Services />
        <StatsSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;