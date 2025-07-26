// src/components/SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <div className="text-center mb-12">
      {/* تغییر کرد: text-dark-blue به text-white */}
      <h2 className="text-4xl font-bold text-white mb-4">
        {children}
      </h2>
      <div className="flex justify-center">
        {/* تغییر کرد: bg-primary به bg-accent برای دیده شدن روی زمینه تیره */}
        <div className="w-20 h-1 bg-accent rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionTitle;