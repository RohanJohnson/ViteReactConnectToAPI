import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Search";
import HomePage from "./HomePage";
import Test from "./Test";
import Signin from "./Signin";
import Signup from "./Signup";
import Movies from "./Movies";
import Specific from "./Specific"
import { Link } from "react-router-dom";

// Width of the left menu
const drawerWidth = 240;

// Open menu transition
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

// Close menu transition
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// Head of the left menu
export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Top header
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// Initialising thedraw itself
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


// Default function -- source: MUI documentation
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <Box sx={{ display: 'flex' }}>
      <Router>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Movie Database
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>

            <Link to="/" style={{ textDecoration: 'none' }}>
              <ListItem key="Home" disablePadding sx={{ display: 'block' }}>


                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >

                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {<HomeIcon />}

                  </ListItemIcon>
                  <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>

              </ListItem>
            </Link>

            <Link to="/movies" style={{ textDecoration: 'none' }}>
              <ListItem key="Home" disablePadding sx={{ display: 'block' }}>


                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >

                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {<MovieIcon />}

                  </ListItemIcon>
                  <ListItemText primary="Popular Movies" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>

              </ListItem>
            </Link>

            <Link to="/searchmovie" style={{ textDecoration: 'none' }}>
              <ListItem key="Home" disablePadding sx={{ display: 'block' }}>


                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >

                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {<SearchIcon />}

                  </ListItemIcon>
                  <ListItemText primary="Search Movies" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>

              </ListItem>
            </Link>

            <Link to="/test" style={{ textDecoration: 'none' }}>
              <ListItem key="Test" disablePadding sx={{ display: 'block' }}>


                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >

                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {<QuestionMarkIcon />}

                  </ListItemIcon>
                  <ListItemText primary="Test" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>

              </ListItem>
            </Link>
          </List>


          <Divider />
          <List>

            <Link to="/login" style={{ textDecoration: 'none' }}>
              <ListItem key="Test" disablePadding sx={{ display: 'block' }}>


                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >

                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {<LoginIcon />}

                  </ListItemIcon>
                  <ListItemText primary="Login" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>

              </ListItem>
            </Link>

          </List>
        </Drawer>
        <Box className="main" component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {/* <Typography paragraph>
          Lorem ipsum dolor sit amet.
        </Typography>
        <Typography paragraph>
          Nihil!
        </Typography> */}

          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/searchmovie" element={<Search />} />
            <Route path="/test" element={<Test />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/movie/:id" element={<Specific />} />
          </Routes>
        </Box>
      </Router>

    </Box>
  );
}