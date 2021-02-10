import React from 'react';

import { 
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  List,
  Drawer,
  ListItemIcon,
  ListItemText,
  ListItem,
  Divider,
  Box
 } from '@material-ui/core';

import { Link } from 'react-router-dom';

import Yt from '../../img/yt.png';

import { AccountCircle, Menu } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const useStyles = makeStyles( (theme) => ({
  root: {
    height: '100vh'
  },  
  appBar: {
    boxShadow: 'none',
    backgroundColor: '#fff',
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',

  },
  grow: {
    flexGrow: 1
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  listItemText: {
    fontSize: 14
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  }

}))


const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar className={classes.appBar} > 

        <Toolbar>

          <IconButton edge="start" >
            <Menu />
          </IconButton>
          <Link to="/">
          <img style={{ width: 60, marginLeft: 18 }}  src={Yt} alt="Logo oficial do Youtube" />
          </Link>
          <div className={classes.grow} />
          
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
          <MoreVertIcon />
          </IconButton>
          <Button  variant="outlined" color="primary" startIcon={<AccountCircle style={{ fontSize: 25 }} />} > 
            Fazer Login
          </Button>
        </Toolbar>

      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
          <ListItem button classes={{
                root: classes.listItem
              }} >
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }} primary={'Inicio'} />
              </ListItem>
              <ListItem button classes={{
                primary: classes.listItem
              }} >
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }} primary={'Em Alta'} />
              </ListItem>
              <ListItem button classes={{
                root: classes.listItem
              }} >
                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }} primary={'Inscrições'} />
              </ListItem>
                <Divider classes={{
                  root: classes.divider
                }} />
              <ListItem button classes={{
                root: classes.listItem
              }} >
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }} primary={'Biblioteca'} />
              </ListItem >
              <ListItem button classes={{
                root: classes.listItem
              }} >
                <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                <ListItemText classes={{
                  primary: classes.listItemText
                }} primary={'Em alta'} />
              </ListItem>
              <Divider classes={{
                root: classes.divider
              }} />
          </List>
          <Box ml={4} >
            <Typography  variant="body2" component="p" >
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Button style={{ marginTop: 15 }}  variant="outlined" color="primary" startIcon={<AccountCircle style={{ fontSize: 25 }}  />} > 
            Fazer Login
          </Button>
          </Box>
              <Divider classes={{
                root: classes.divider
              }} />
        </div>
      </Drawer>
    </div>
  );
}

export default Home;