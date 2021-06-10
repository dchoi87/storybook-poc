
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
  // viewport: {
  //   viewports: {
  //     custom1440: {
  //       name: '1440',
  //       styles: {
  //         width: '1440px',
  //         height: '800px',
  //       },
  //     },
  //     custom1024: {
  //       name: '1024',
  //       styles: {
  //         width: '1024px',
  //         height: '800px',
  //       },
  //     },
  //     custom768: {
  //       name: '768',
  //       styles: {
  //         width: '768px',
  //         height: '800px',
  //       },
  //     },
  //     custom425: {
  //       name: '425',
  //       styles: {
  //         width: '425px',
  //         height: '800px',
  //       },
  //     },
  //   }
  // }
}