import React from 'react'
import Link from 'next/link'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    // this.timer = startClock(dispatch)
  }

  render () {
    return (
      <div>
        <a href="http://127.0.0.1/oauth/authorize/?client_id=5&redirect_uri=http://127.0.0.1:3000/token&response_type=code">Login</a>
        <Link href="/dashboard">
          <a>Private Dashboard</a>
        </Link>
      </div>
    )
  }
}

export default Index
