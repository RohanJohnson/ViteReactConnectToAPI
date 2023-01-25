import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import {theme} from "./Nav"

export default function HomePage()
{
  return(
    <div className="home">
    <h2> Welcome to the Movie Database</h2>
    <h3>Would you like to...</h3>
       <div className="homeLinks">
       <ThemeProvider theme={theme}>
           <h4><Link to="/movies" style={{ textDecoration: 'none' }}><Button color="primary" variant="outlined">View this week's trending movies</Button></Link></h4>
          <h3>or</h3>
           <h4><Link to="/searchmovie" style={{ textDecoration: 'none' }}><Button variant="outlined" >Search for a specific movie</Button></Link></h4>
           </ThemeProvider>
           </div>
    </div>
  );
}