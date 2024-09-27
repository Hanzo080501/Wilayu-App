import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        // sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        primary: "'Inter', 'sans-serif'",
      },
      boxShadow: {
        myshadow1: '4.1px -5px 0 0 rgb(243, 244, 246)',
        myshadow2: '-4.1px -5px 0 0 rgb(243, 244, 246)',
        myshadow3: '4.1px -5px 0 0 rgb(243, 244, 246)',
        myshadow4: '-4.1px -5px 0 0 rgb(243, 244, 246)',
      },
    },
  },

  plugins: [forms],
};
