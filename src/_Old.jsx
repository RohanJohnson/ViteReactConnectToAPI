import React, { useState } from "react";
import "./styles.css";
import axios from 'axios';
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Nav"
import { LoadingButton } from '@mui/lab';
import Test from './Test'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Search() {
  const [loading, setLoading] = useState(false);

  function handleEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector('.searchButton').click();
    }
  }



  return (
    <div className="searchcontainer">
      <div className="searchbar">
        <ThemeProvider theme={theme}>
          <form>
            <label htmlFor="search">Search movies: </label>
            <input onKeyDown={handleEnter} type="text" id="search" name="title" ></input>
            {/* <input type="submit" value="Search"></input> */}
            <LoadingButton loading={loading} className="searchButton" variant="contained" onClick={(event) => GetMovie(event, loading, setLoading)}>Search</LoadingButton>
          </form>
          <div id="con">

          </div>
          <Stack className="skele" spacing={1}>

            <Skeleton variant="rounded" width={300} height={450} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />

          </Stack>
        </ThemeProvider>
      </div>
    </div>
  );
}

const baseURL = 'http://localhost:3000/search';




export async function GetMovie(event, loading, setLoading) {

  event.preventDefault();
  if (!document.getElementById('search').value) {
    alert('Please make sure to type something to search');
    return;
  }
  try {
    const searchURL = baseURL + "?title=" + document.getElementById('search').value;
    const config = {
      method: 'get',
      url: searchURL,
      headers: {}
    };

    setLoading(true);

    setTimeout(() => { setLoading(false); }, 2000);

    if (loading === true) {
      console.log('loading...')
    }



    const response = await axios(config);
    let info = response.data;
    if (info.length === 0) {
      // newDiv = document.createElement('div');
      // newError = document.createTextNode('Sorry, movie is not found');
      // newDiv.appendChild(newError);
      // return(e);
      throw new Error('Sorry, movie not found.');
    }
    const div = document.getElementById("con");
    const icon = info.poster_path;
    // const newContent = document.createTextNode(JSON.stringify(info, null, 10));
    const newIcon = document.createElement("img");
    const source = ("https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + icon)
    newIcon.src = source;


    console.log(info)


    const table = document.createElement("table");

    // info.forEach(obj => {

    let objKey = (Object.keys(info));
    console.log(objKey)
    let objValue = (Object.values(info));
    let i = 0;
    objKey.forEach(element => {
      let newRow = table.insertRow(-1);
      let newCell = newRow.insertCell(0);
      let newText = document.createTextNode(element);
      newCell.appendChild(newText);

      let newCell2 = newRow.insertCell(1);
      let newText2 = document.createTextNode(objValue[i]);
      newCell2.appendChild(newText2);
      i = i + 1;
    })

    // });

    setTimeout(() => {
      try {
        div.firstElementChild.replaceWith(newIcon);
        div.lastElementChild.replaceWith(table);
      } catch {
        div.appendChild(newIcon);
        div.appendChild(table);
      }
    }, 2000);



    // div.appendChild(newContent);
  } catch (e) {
    console.log(e);
    if (confirm('Something went wrong, would you like to refresh?')) {
      window.scrollTo(0, 0);
      location.reload()
    }
  }
}

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