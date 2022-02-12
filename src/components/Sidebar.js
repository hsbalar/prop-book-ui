import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import StorageIcon from '@material-ui/icons/Storage';
import SearchIcon from '@material-ui/icons/Search';
import PostAddIcon from '@material-ui/icons/PostAdd';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { handleDrawerToggle } from '../state/actions/auth';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const routes = [
  {
    text: 'Home',
    to: '/',
    icon: <HomeIcon />,
  },
  {
    text: 'Add Property',
    to: '/add-property-details',
    icon: <PostAddIcon />,
  },
  {
    text: 'View All Property',
    to: '/properties',
    icon: <StorageIcon />,
  },
  {
    text: 'Advance Search',
    to: '/advance-search',
    icon: <SearchIcon />,
  },
];

function Sidebar({ open, handleDrawerToggle }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      onClose={handleDrawerToggle}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {routes.map((route, index) => (
          <ListItem
            button
            key={route.text}
            onClick={() => {
              history.push(route.to);
              handleDrawerToggle();
            }}
          >
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText primary={route.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

function mapStateToProps(state) {
  const { drawer } = state.auth;
  return { open: drawer };
}

export default connect(mapStateToProps, { handleDrawerToggle })(Sidebar);
