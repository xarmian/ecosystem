/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/avm-wallet-svelte/**/*.{html,js,svelte,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        voi: {
          dark: 'var(--voi-dark)',
          light: 'var(--voi-light)',
        },
        bg: {
          light: 'var(--bg-light)',
          alt: 'var(--bg-alt)',
          dark: 'var(--bg-dark)',
        }
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        display: ['"Chakra Petch"', 'sans-serif'],
      },
      fontSize: {
        'hero': '4rem',
        'section': '3.5rem',
      },
      spacing: {
        'section': '8rem',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
    }
  },
  plugins: []
} 