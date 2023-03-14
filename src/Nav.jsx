import "./styles.css";
import * as React from 'react';
import { Button, Menu, MenuItem, Fade } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


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

            <MenuIcon color="neutral"></MenuIcon>
          </Button>
        </div>
        <Menu
          color="neutral"
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