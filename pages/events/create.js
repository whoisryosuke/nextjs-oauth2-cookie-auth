import React from 'react'
import Router from 'next/router'
import Api from  '../../utils/SeshSourceApi'
import withAuth from  '../../utils/withAuth'
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
  textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
  },
  fullTextField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '100%',
  },
  halfField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '48%',
  }, 
  cityField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '22%',
  },
  button: {
      margin: theme.spacing.unit,
      display: 'block',
      width: '100%'
  },
});

class CreateEvent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            start_date: '2017-05-24T10:30',
            end_date: '2017-05-24T10:30',
            street_address: '',
            city: '',
            state: '',
            email: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const SeshApi = new Api(this.props.auth);

        // Destructure to copy the state object (instead of altering it)
        let data = { ...this.state };
        
        // Grab the dates and convert to PHP format
        let { start_date, end_date } = data;
        data.start_date = moment(start_date).format('YYYY-MM-DD HH:mm:ss');
        data.end_date = moment(end_date).format('YYYY-MM-DD HH:mm:ss');

        // Create the post!
        let results = SeshApi.create(data);
        
        // If successful, clear the form for a new post
        Router.push('/events/manage');
    }

    setDate = (dateTime) => this.setState({ dateTime })

   render() {
     const { classes, theme, loggedIn } = this.props;
     const user = this.props.auth.getProfile()
     return (   
        <div className={classes.root}>
          <Header />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="headline" component="h3">
                New Event
              </Typography>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    name="title"
                    label="Event Name"
                    className={classes.fullTextField}
                    value={this.state.name}
                    onChange={this.handleChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    name="start_date"
                    id="datetime-local"
                    label="Start Date"
                    type="datetime-local"
                    value={this.state.start_date}
                    className={classes.halfField}
                    onChange={this.handleChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />

                <TextField
                    name="end_date"
                    id="datetime-local"
                    label="End Date"
                    type="datetime-local"
                    value={this.state.end_date}
                    onChange={this.handleChange}
                    className={classes.halfField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />

                <TextField
                    name="street_address"
                    label="Street Address"
                    className={classes.halfField}
                    value={this.state.street_address}
                    onChange={this.handleChange}
                    margin="normal"
                />

                <TextField
                    name="city"
                    label="City"
                    className={classes.cityField}
                    value={this.state.city}
                    onChange={this.handleChange}
                    margin="normal"
                />

                <TextField
                    name="state"
                    label="State"
                    className={classes.cityField}
                    value={this.state.state}
                    onChange={this.handleChange}
                    margin="normal"
                />

                <TextField
                    name="email"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange}
                    margin="normal"
                />

                <Button 
                    size="large"
                    variant="contained" 
                    color="primary" 
                    className={classes.button} 
                    onClick={this.handleSubmit}
                >
                    Create event
                </Button>
              </form>
            </Paper>
            <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
          </main> 
        </div>
     )
   }
}

export default withAuth(withStyles(styles, { withTheme: true })(CreateEvent));