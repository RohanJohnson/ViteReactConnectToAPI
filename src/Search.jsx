import React, { useState } from "react";
import "./styles.css";
import axios from 'axios';
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Nav"
import { LoadingButton } from '@mui/lab';
import Test from './Skeleton'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import { key } from "localforage";
import { Table, TableRow, TableBody, TableCell } from '@mui/material'

const baseURL = 'http://localhost:3000/search';

const exclude = ["backdrop_path", "genre_ids", "id"];

export default function Search() {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [param, setParam] = useState("")

  function handleEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector('.searchButton').click();
    }
  }

  async function searchMovies(event) {
    event.preventDefault()
    const searchTerm = event.target.title.value;

    const searchURL = baseURL + `?title=${searchTerm}`;
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
    setInfo(response.data);
  }

  return (
    <div className="searchcontainer">
      <div className="searchbar">
        <ThemeProvider theme={theme}>
          <form onSubmit={(event) => searchMovies(event)}>
            <label htmlFor="search">Search movies: </label>
            <input onChange={(event) => { console.log(event.target.value) }} onKeyDown={handleEnter} type="text" id="search" name="title" required="true" ></input>
            {/* <input type="submit" value="Search"></input> */}
            <LoadingButton loading={loading} className="searchButton" variant="contained" type="submit">Search</LoadingButton>
          </form>

          {loading ?
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

            </Stack> : <h1>test</h1>
          }

          {info != null ?
            <div id="con">
              <Typography varient="h1" >{info.title}</Typography>
              <Table>
                <TableBody>
                  {Object.keys(info).filter((prop) => exclude.indexOf(prop) === -1).map((key) => <TableRow>
                    <TableCell>{key}</TableCell>
                    <TableCell>{`${info[key]}`}</TableCell>
                  </TableRow>)}
                </TableBody>
              </Table>
            </div> : <h1>loading</h1>}

        </ThemeProvider>
      </div>
    </div>
  );
}






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