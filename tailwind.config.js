/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '4.5rem'
      }
    },
    fontFamily: {
      sans: [
        'Roboto Condensed',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      secondary: [
        'Roboto Condensed',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      body: ['Roboto Condensed', 'sans-serif'],
      serif: ['Volkhov', 'Georgia', 'Cambria', 'serif']
    },
    boxShadow: {
      image: '0 10px 20px rgba(56,56,56,.3)'
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [
    function ({ addBase, config }) {
      addBase({
        body: {
        },
        h1: {
          fontSize: config('theme.fontSize.4xl'),
          fontWeight: 300,
          lineHeight: 1,
          color: config('theme.colors.gray.800'),
          marginBottom: config('theme.spacing.3')
        },
        h2: {
          fontSize: config('theme.fontSize.3xl'),
          fontWeight: 300,
          lineHeight: 1,
          color: config('theme.colors.gray.800'),
          marginBottom: config('theme.spacing.3')
        },
        h3: {
          fontSize: config('theme.fontSize.2xl'),
          fontWeight: 300,
          lineHeight: 1,
          color: config('theme.colors.gray.800'),
          marginBottom: config('theme.spacing.3')
        },
        h4: {
          fontSize: config('theme.fontSize.xl'),
          fontWeight: 300,
          lineHeight: 1,
          color: config('theme.colors.gray.800'),
          marginBottom: config('theme.spacing.3')
        },
        h5: {
          fontSize: config('theme.fontSize.lg'),
          fontWeight: 300,
          lineHeight: 1,
          color: config('theme.colors.gray.800'),
          marginBottom: config('theme.spacing.3')
        },
        p: {
          fontSize: config('theme.fontSize.base'),
          fontWeight: 300
        }
      })
    }
  ]
}
