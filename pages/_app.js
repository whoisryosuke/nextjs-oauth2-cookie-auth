import App, {Container} from 'next/app'
import React from 'react'
import { CookiesProvider } from 'react-cookie';

class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore, persistor} = this.props
    return (
      <Container>
        <CookiesProvider>
            <Component {...pageProps} />
        </CookiesProvider>
      </Container>
    )
  }
}

export default MyApp
