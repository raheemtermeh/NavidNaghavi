// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0080FF', // سبز تیره اصلی
        'dark': '#111827',     // یک نوع مشکی/خاکستری بسیار تیره
        'light': '#f3f4f6',   // خاکستری خیلی روشن برای متن روی پس زمینه تیره
        'accent': '#00C64C',   // طلایی/خردلی به عنوان رنگ مکمل
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem', // برای ایجاد قوس‌های بزرگ
      },
      fontFamily: {
        'iranian-sans': ['IranianSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 