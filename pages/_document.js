import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@mui/styles'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    // Run the react rendering logic synchronously
    ctx.renderPage = () => originalRenderPage({
      // Usefull for wraping the whole react tree
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      // Usefull for wrapping in a per-page basis
      // enhanceComponent: (Component) => Component
    })

    // run the parent `getInitialProps` it now includes the custom 'renderPage'
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
    }
  }
  render () {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument