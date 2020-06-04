import React, { Component } from 'react';
import CandleChart from './candlechart';
import CurrentPrice from './current_price';
import StockTable from './stock_table';
import { mainListItems, secondaryListItems } from './list_Items';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withStyles } from '@material-ui/core/styles';
import CommentList from './comment_list';
import CommentPost from './comment_post';

  

const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 400,
  },
  fixedHeightFill: {
    height: "100%",
  },
});


class HelloIndex extends Component{

  constructor(props){
    super(props)
    this.state={
      open: false,
      variant: "permanent",
    }
  }

  componentDidMount(){
    if(window.innerWidth < 500){
      this.setState({
        variant: null
      })
    }
  }

  handleDrawerOpen = () => {
      this.setState({
          open: true,
      });
  };

  handleDrawerClose = () => {
    this.setState({
        open: false
    });
  };

  render(){

    const { classes } = this.props;

      return (
        <div className={classes.root}>
          <CssBaseline>
            <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
                  onClick={this.handleDrawerOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  KABUAPP
                </Typography>
                <IconButton color="inherit">
                    <NotificationsIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
              variant={this.state.variant}
              classes={{
                paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
              }}
              open={this.state.open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>{mainListItems}</List>
              <Divider />
              <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <CandleChart />
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper className={clsx(classes.paper, classes.fixedHeightFill)}>
                    <CurrentPrice id={this.props.match.params}/>
                  </Paper>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Paper className={classes.paper}>
                    <CommentList id={this.props.match.params}/>
                  </Paper>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Paper className={classes.paper}>
                    <CommentPost id={this.props.match.params}/>
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <StockTable id={this.props.match.params}/>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </main>
          </CssBaseline>
        </div> 
      )
  }
}

export default withStyles(useStyles)(HelloIndex)

