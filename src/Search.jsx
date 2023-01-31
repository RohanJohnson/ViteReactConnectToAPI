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

// const baseURL = 'http://localhost:3000/movtest';
const baseURL = 'http://localhost:3000/search';


export async function GetMovie(event) {
  event.preventDefault();
  try {
    const searchURL = baseURL + "?title=" + document.getElementById('search').value;
    const config = {
      method: 'get',
      url: searchURL,
      headers: {}
    };
    const response = await axios(config);
    let info = response.data;
    if (info.length === 0){
      // newDiv = document.createElement('div');
      // newError = document.createTextNode('Sorry, movie is not found');
      // newDiv.appendChild(newError);
      // return(e);
      throw new Error('Sorry, movie not found.');
    }
    const div = document.getElementById("con");
    const icon = info[0].poster_path;
    // const newContent = document.createTextNode(JSON.stringify(info, null, 10));
    const newIcon = document.createElement("img");
    const source = ("https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + icon)
    newIcon.src = source;
    document.getElementById('con').appendChild(newIcon);


    const table = document.createElement("table");
    
    info.forEach(obj => {
      
      let objKey = (Object.keys(obj));
      let objValue = (Object.values(obj));
      let i = 0;
      objKey.forEach(element => {
        let newRow = table.insertRow(-1);
        let newCell = newRow.insertCell(0);
        let newText = document.createTextNode(element);
        newCell.appendChild(newText);

        let newCell2 = newRow.insertCell(1);
        let newText2 = document.createTextNode(objValue[i]);
        console.log(i);
        newCell2.appendChild(newText2);
        i=i+1;
      })
  
    });
    document.getElementById('con').appendChild(table);
    


    // div.appendChild(newContent);
    } catch (e) {
    console.log(e);
  }
}


// window.onbeforeunload = function () {
//   if(confirm("Are you sure you want to refresh?")){
//     window.scrollTo(0, 0);
//   }
// }

window.onbeforeunload = (event) => {
  const e = event || window.event;
  window.scrollTo(0, 0);
  // Cancel the event
  e.preventDefault();
  if (e) {
    e.returnValue = ''; // Legacy method for cross browser support
  }
  return ''; // Legacy method for cross browser support
};