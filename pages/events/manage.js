import React from 'react'
import Link from 'next/link'
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

class CreateEvent extends React.Component {
    static async getInitialProps({ req }) {
        let query = await fetch('http://localhost/api/events')
        let events = await query.json()

        return {
            events: events
        }
    }

   render() {
     const { classes, theme, loggedIn, events } = this.props;
     const user = this.props.auth.getProfile()

        const list = events.data.map((event) => {
            let startDate = moment(event.start_date).format('MMM Do YYYY, h:mm a')
            let url = '/events/' + event.slug;
            return (
                <Link key={ event.slug } href={ url }>
                    <ListItem button>
                        <ListItemText primary={ event.title } secondary={ startDate } />
                    </ListItem>
                </Link>
            )
        })

     return (   
        <div className={classes.root}>
          <Header />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="headline" component="h3">
                Manage Events
              </Typography>
                {list &&
                    <List component="nav">
                        { list }
                    </List>
                }
            </Paper>
            <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
          </main> 
        </div>
     )
   }
}

export default withAuth(withStyles(styles, { withTheme: true })(CreateEvent));