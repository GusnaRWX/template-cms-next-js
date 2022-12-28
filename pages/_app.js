import React, { Fragment } from "react"
import PropTypes from 'prop-types'
import { ThemeProvider, StyledEngineProvider } from "@mui/material"
import createEmotionCache from "../utils/createEmotionCache"
import { CacheProvider } from "@emotion/react"
import NavigationBar from "../components/core/NavigationBar"
import Xtheme from "@/utils/theme"
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'

const clientSideEmotionCache = createEmotionCache()

function MyApp ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}) {
  return (
    <Fragment>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Gusna CMS</title>
          <meta
            name='viewport'
            content='initial-scale=1, width=device-width'
          />
          <meta charSet='utf-8' />
        </Head>
        <ThemeProvider theme={Xtheme}>
          <CssBaseline />
          <NavigationBar>
            <Component {...pageProps} />
          </NavigationBar>
        </ThemeProvider>
      </CacheProvider>
    </Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  emotionCache: PropTypes.any
}

export default MyApp
