import React from 'react'
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Header from '../components/header';

import '../assets/css/seshsource.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    paddingTop: '4rem'
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

class Login extends React.Component {
  static getInitialProps ({ req }) {
    return {}
  }

  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    const {dispatch} = this.props
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {dispatch} = this.props

    // dispatch login here
    // login(dispatch, form.data)
    // dispatch(userActions.login(this.state.username, this.state.password));
  }

  render () {
     const { classes, theme, loggedIn } = this.props;
    return (
      <section className={classes.root}>
        <Header />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Paper className={classes.paper} elevation={1}>
              <form onSubmit={ this.handleSubmit } className="ui form">
                  <section className="field">
                      <label>Username:</label>
                      <input 
                          name="username" 
                          type="text" 
                          value={ this.state.username } 
                          onChange={ this.handleChange } 
                      />
                  </section>

                  <section className="field">
                      <label>Password:</label>
                      <input 
                          name="password" 
                          type="text" 
                          value={ this.state.password } 
                          onChange={ this.handleChange } 
                      />
                  </section>
                    <Button variant="contained" color="primary" onClick={ this.handleSubmit }>
                      Submit
                    </Button>
              </form>
            </Paper>
          </main> 
      </section>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Login)