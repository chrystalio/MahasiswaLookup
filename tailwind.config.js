/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["lofi", "dark"],
  },
}

