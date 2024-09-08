module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Include all JSX and TSX files in the src directory
  ],
  theme: {
    extend: {
      animation: {
        'logo-create': 'logoCreate 2s ease forwards',
      },
      keyframes: {
        logoCreate: {
          '0%': {
            transform: 'translateX(-100%) scale(0.5)',
            opacity: 0,
          },
          '50%': {
            transform: 'translateX(0) scale(1.2)',
            opacity: 0.5,
          },
          '100%': {
            transform: 'translateX(0) scale(1)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
