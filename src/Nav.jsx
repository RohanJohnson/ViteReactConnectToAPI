import "./styles.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Search from "./Search";
import Movies from "./Movies";
import HomePage from "./App";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from "@emotion/react";
// import theme from "./App";
import { Link } from "react-router-dom";


import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#1DA1F2',
      darker: '#053e85',
    },
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
});


export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <div>

        <div className="hamburger">
          <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >

            <ThemeProvider theme={theme}>
              <MenuIcon color="neutral"></MenuIcon>
            </ThemeProvider>
          </Button>
        </div>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'rgba(29, 161, 242, 1)' }}>
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
          <Link to="/movies" style={{ textDecoration: 'none', color: 'rgba(29, 161, 242, 1)' }}>
            <MenuItem onClick={handleClose}>Popular Movies</MenuItem>
          </Link>
          <Link to="/searchmovie" style={{ textDecoration: 'none', color: 'rgba(29, 161, 242, 1)' }}>
            <MenuItem onClick={handleClose}>Search Movie</MenuItem>
          </Link>
          <Link to="/test" style={{ textDecoration: 'none', color: 'rgba(29, 161, 242, 1)' }}>
            <MenuItem onClick={handleClose}>Test</MenuItem>
          </Link>
        </Menu>
      </div>
      <div className="logo">Movie Database</div>
    </div>
  );
}