/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        safety: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb', // Primary Safety Blue
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        earnings: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981', // Primary Earnings Green
          600: '#059669',
          700: '#047857',
        },
        hazard: {
          500: '#f59e0b', // Amber Warning
          600: '#d97706',
          700: '#b45309',
        },
        danger: {
          500: '#ef4444', // Red Danger
          600: '#dc2626',
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
