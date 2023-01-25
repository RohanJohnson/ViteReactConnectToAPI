import React from "react";
import "./styles.css";
import axios from 'axios';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@emotion/react";
import {theme} from "./Nav"


export default function Search() {
  return (
    <div className="searchcontainer">
    <div className="searchbar">
    <ThemeProvider theme={theme}>
       <form>
       <label htmlFor= "search">Search movies: </label>
         <input type="text" id="search" name="title" ></input>
         {/* <input type="submit" value="Search"></input> */}
         <Button variant="contained" onClick={GetMovie}>Search</Button>
       </form>
       <div id="con"></div>
       </ThemeProvider>
    </div>
    </div>
  );
}


const baseURL = 'http://localhost:3000/movtest';


export async function GetMovie(event) {
  event.preventDefault();
try{
  const searchURL = baseURL+"?title="+document.getElementById('search').value;
const config = {
  method: 'get',
  url: searchURL,
  headers: {}
};
  const response = await axios(config);
  const div = document.getElementById("con");
  let newContent = document.createTextNode(JSON.stringify(response.data,null,10));
  console.log(newContent);
  div.appendChild(newContent);
  // document.getElementById('textbox').innerHTML = "Results: <br> <br {response.data}";
}
catch(e){
  console.log(e);
}
}




