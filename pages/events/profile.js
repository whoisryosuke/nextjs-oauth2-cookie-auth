import React from 'react'
import Api from  '../../utils/SeshSourceApi'
import withAuth from  '../../utils/withAuth'
import moment from 'moment';
import fetch from 'isomorphic-unfetch'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Header from '../../components/header';

import '../../assets/css/seshsource.css'

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
  },
});

class EventProfile extends React.Component {
    static async getInitialProps({ req, query: { slug } }) {
        let query = await fetch('http://localhost/api/events/' + slug)
        let event = await query.json()
        let organizerQuery = await fetch('http://localhost/api/users/' + event.organizer_id)
        let organizer = await organizerQuery.json()

        return {
            event,
            organizer,
            slug
        }
    }

   render() {
     const { classes, theme, loggedIn, event, slug, organizer } = this.props;
     const user = this.props.auth.getProfile()

     console.log(organizer);

     return (   
        <div className={classes.root}>
          <Header />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="headline" component="h1">
                { event.title }
              </Typography>

              <Typography variant="subheading" component="h4" color="textSecondary">
                Start Date
              </Typography>
              <Typography variant="body1" component="p">
                { moment(event.start_date).format('MM-DD-YYYY') }
              </Typography>
              <Typography variant="body1" component="p">
                { moment(event.start_date).format('h:mm a') }
              </Typography>

              <Typography variant="subheading" component="h4" color="textSecondary">
                End Date
              </Typography>
              <Typography variant="body1" component="p">
                { moment(event.end_date).format('MM-DD-YYYY') }
              </Typography>
              <Typography variant="body1" component="p">
                { moment(event.end_date).format('h:mm a') }
              </Typography>


              <Typography variant="subheading" component="h4" color="textSecondary">
                Description
              </Typography>
              <Typography variant="body1" component="p">
                { event.description }
              </Typography>


              <Typography variant="subheading" component="h4" color="textSecondary">
                Street Address
              </Typography>
              <Typography variant="body1" component="p">
                { event.street_address }
              </Typography>

              <Typography variant="subheading" component="h4" color="textSecondary">
                City
              </Typography>
              <Typography variant="body1" component="p">
                { event.city }
              </Typography>

              <Typography variant="subheading" component="h4" color="textSecondary">
                State
              </Typography>
              <Typography variant="body1" component="p">
                { event.state }
              </Typography>

              <Typography variant="subheading" component="h4" color="textSecondary">
                Postal Code
              </Typography>
              <Typography variant="body1" component="p">
                { event.postal_code }
              </Typography>

              <Typography variant="subheading" component="h4" color="textSecondary">
                Country
              </Typography>
              <Typography variant="body1" component="p">
                { event.country }
              </Typography>

              <Typography variant="subheading" component="h4" color="textSecondary">
                Website
              </Typography>
              <Typography variant="body1" component="p">
                { event.website }
              </Typography>

              <Typography variant="subheading" component="h4" color="textSecondary">
                Email
              </Typography>
              <Typography variant="body1" component="p">
                { event.email }
              </Typography>

              <Typography variant="subheading" component="h4" color="textSecondary">
                Organizer
              </Typography>
              <Typography variant="body1" component="p">
                { organizer.name }
              </Typography>

              <Typography variant="subheading" component="h4" color="textSecondary">
                Organizer Email
              </Typography>
              <Typography variant="body1" component="p">
                { organizer.email }
              </Typography>
                
            </Paper>
          </main> 
        </div>
     )
   }
}

export default withAuth(withStyles(styles, { withTheme: true })(EventProfile));