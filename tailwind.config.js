/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        // Coastal editorial surfaces
        snow: '#fdfaf3',
        sand: '#eee2c8',
        paper: '#ffffff',
        // Deep navy of the ocean at night
        navy: {
          950: '#061a2f',
          900: '#0a2540',
          800: '#0f3357',
          700: '#164672',
          600: '#1e5b93'
        },
        ocean: {
          500: '#2c6a9c',
          600: '#1e547f',
          700: '#173f62'
        },
        driftwood: {
          800: '#3d2e1f',
          700: '#54402c',
          600: '#7a5c3f'
        },
        slate: {
          400: '#8f9aab',
          500: '#6b7787',
          600: '#4e5866'
        },
        gold: {
          500: '#d99a3a',
          600: '#b17d24',
          700: '#8a611a'
        },
        ink: '#0f1a24',
        muted: '#5a6472',
        border: '#e3d8bd'
      },
      boxShadow: {
        card: '0 14px 44px -22px rgba(10, 37, 64, 0.35)',
        soft: '0 4px 18px -6px rgba(10, 37, 64, 0.15)'
      },
      backgroundImage: {
        'canvas': 'linear-gradient(160deg, #fdfaf3 0%, #eee2c8 55%, #e6d4a8 100%)'
      }
    }
  },
  plugins: []
}
