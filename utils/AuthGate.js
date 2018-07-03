import React, { Component } from 'react'

class AuthGate extends Component {
  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      name: cookies.get('seshToken') || null
    };
  }

  componentDidMount() {
      console.log(this.state.token);
      if (!this.state.token) {
          Router.push('/login')
      }
      this.setState({
          isLoading: false
      })
  }
  render() {
    return (
      <div>
          {this.state.isLoading ? (
              <div>LOADING....</div>
            ) : (
            this.props.children
            )}
      </div>
    )
  }
}

export default withCookies(AuthGate)