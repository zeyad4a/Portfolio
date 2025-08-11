/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
  plugins: [require('@tailwindcss/aspect-ratio'),
            require('@tailwindcss/forms')]
    
  }

  module.exports = {
  theme: {
    extend: {
      content: {
        arrow: '"➜"', // سهم جاهز للاستخدام
      },
    },
  },
  plugins: [],
};
