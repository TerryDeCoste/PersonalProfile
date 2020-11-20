module.exports = {
  theme: {
    typography: {
      default: {
        css: {
          'ul > li::before': {
            content: '',
          },
          '> ul > li > *:first-child': {
            marginTop: 0,
          },
          '> ul > li > *:last-child': {
            marginBottom: 0,
          },
          h1: {
            color: 'white',
          },
          h2: {
            marginTop: '1.25em',
            fontSize: '2.0em',
            color: 'white',
          },
          h3: {
            marginTop: '1.25em',
            color: 'white',
          },
          'h3 + *': {
            marginTop: '1.25em',
          },
          a: {
            color: '#DDD',
            '&:hover': {
              color: '#DDD',
            },
          },
        },
      },
    },
    extend: {
      backgroundImage: theme => ({
       'header-pattern': "url('assets/header-bg.jpg')",
      })
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
  ],
  purge: [
    './src/**/*.js',
    './src/**/*.njk',
    './src/**/*.svg',
  ],
}
