
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      printWidth: 160
    },
    highlighter: {
      showLineNumbers: true
    }
  },
  viewport: {
    viewports: {
      iphoneLarge: {
        name: 'iPhone 6/7/8 Plus',
        styles: {
          width: '414px',
          height: '736px',
        },
      },
      iPhoneSmall: {
        name: 'iPhone 5/SE',
        styles: {
          width: '320px',
          height: '568px',
        },
      },
      iPad: {
        name: 'iPad',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
    }
  }
}