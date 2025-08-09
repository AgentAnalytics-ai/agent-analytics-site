import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Professional semantic color system
        background: {
          primary: 'rgb(var(--background-primary) / <alpha-value>)',
          secondary: 'rgb(var(--background-secondary) / <alpha-value>)',
          accent: 'rgb(var(--background-accent) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)',
          inverse: 'rgb(var(--text-inverse) / <alpha-value>)',
        },
        accent: {
          primary: 'rgb(var(--accent-primary) / <alpha-value>)',
          secondary: 'rgb(var(--accent-secondary) / <alpha-value>)',
        },
        success: {
          primary: 'rgb(var(--success-primary) / <alpha-value>)',
        },
        border: {
          primary: 'rgb(var(--border-primary) / <alpha-value>)',
          accent: 'rgb(var(--border-accent) / <alpha-value>)',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--text-primary))',
            maxWidth: 'none',
            a: {
              color: 'rgb(var(--accent-primary))',
              '&:hover': {
                color: 'rgb(var(--accent-secondary))',
              },
            },
            h1: {
              color: 'rgb(var(--text-primary))',
            },
            h2: {
              color: 'rgb(var(--text-primary))',
            },
            h3: {
              color: 'rgb(var(--text-primary))',
            },
            h4: {
              color: 'rgb(var(--text-primary))',
            },
            strong: {
              color: 'rgb(var(--text-primary))',
            },
            code: {
              color: 'rgb(var(--text-primary))',
            },
            figcaption: {
              color: 'rgb(var(--text-muted))',
            },
            blockquote: {
              color: 'rgb(var(--text-secondary))',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
