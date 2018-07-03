import React, {Component} from 'react'
import Router from 'next/router'
import AuthService from './AuthService'
import { getCookie, setCookie } from '../utils/Cookies'
import cookie from "js-cookie";

export default function withAuth(AuthComponent) {
    const Auth = new AuthService(process.env.API_DOMAIN_URL)
    return class Authenticated extends Component {

      static async getInitialProps(ctx) {
        const isServer = !!ctx.req

        // Ensures material-ui renders the correct css prefixes server-side
        let userAgent
        let seshToken
        if (!isServer) {
          userAgent = navigator.userAgent
          seshToken = cookie.get('seshToken');
        } else {
          userAgent = ctx.req.headers['user-agent']
          seshToken = getCookie('seshToken', ctx.req);
        }
        let isLoading = true
        console.log(seshToken);
        if (!seshToken) {
          // ctx.res.writeHead(301, {
          //   Location: `http://localhost/oauth/authorize/?client_id=4&redirect_uri=http://localhost:3000/token&response_type=code`
          // })
          // ctx.res.end()
        } else {
          setCookie('seshToken', seshToken)
          isLoading = false
        }
        
        // Check if Page has a `getInitialProps`; if so, call it.
        const pageProps = AuthComponent.getInitialProps && await AuthComponent.getInitialProps(ctx);
        // Return props.
        return { 
          ...pageProps,
          userAgent,
          isLoading,
          seshToken
        }
      }

      constructor(props) {
        super(props)
        this.state = {
          isLoading: props.isLoading,
          token: props.seshToken
        };
      }

      componentDidMount () {
        if (!this.state.token) {
          Router.push('/')
        } 
        this.setState({ isLoading: false })
      }

      render() {
        return (
          <div>
          {this.state.isLoading ? (
              <div>LOADING....</div>
            ) : (
              <AuthComponent {...this.props}  auth={Auth} token={this.state.token} />
            )}
          </div>
        )
      }
    }
}
