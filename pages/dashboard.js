import React from 'react'
import withAuth from  '../utils/withAuth'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

class Dashboard extends React.Component {
   render() {
     const { classes, theme, loggedIn } = this.props;
    //  const user = this.props.auth.getProfile()
     return (   
        <div className={classes.root}>
          <Header />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="headline" component="h3">
                Recent Events
              </Typography>
              <Typography component="p">
                List of recent events here
              </Typography>
            </Paper>
          </main> 
        </div>
     )
   }
}

export default withAuth(withStyles(styles, { withTheme: true })(Dashboard));