import React, { useState } from "react";
import "./styles.css";
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import {Skeleton, Stack, Typography, Table, TableRow, TableBody, TableCell, Box, LinearProgress, Fade } from '@mui/material'

const baseURL = 'http://localhost:3000/search';

const exclude = ["backdrop_path","title","popularity","vote_average","vote_count", "genre_ids", "id", "poster_path", "original language", "video", "overview","original_title"];

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

    setTimeout(() => { setLoading(false); }, 1000+Math.random()*2000);

    if (loading === true) {
      console.log('loading...')
    }



    const response = await axios(config);
    setInfo(response.data);
  }


  return (
    <div className="searchcontainer">
      <div className="searchbar">
          <form onSubmit={(event) => searchMovies(event)}>
            <label htmlFor="search">Search movies: </label>
            <input onChange={(event) => { console.log(event.target.value) }} onKeyDown={handleEnter} type="text" id="search" name="title" required="true" ></input>
            {/* <input type="submit" value="Search"></input> */}
            <LoadingButton loading={loading} className="searchButton" variant="contained" type="submit">Search</LoadingButton>
          </form>

          {loading ?
            <div className="loading">

              <Box sx={{margin:'0 20% -3%', width: '60%' }}>
                <LinearProgress />
              </Box>


              <Stack className="skele" spacing={0.7}>
              
                <Skeleton variant="rounded" width={300} height={30} />
                <Skeleton variant="rounded" width={120} height={30} />
                <br></br>
                <Skeleton variant="rounded" width={300} height={450} />
                <Skeleton variant="rounded" width={650} height={100} />
                <Skeleton variant="rounded" width={250} height={120} />

              </Stack>
            </div> : <h1> </h1>
          }

          {info != null && !loading ?
            <div id="con">
            <br></br>
            <Typography variant="h5" >{info.title}</Typography>
            <Typography variant="h6">Rating: {parseFloat(info.vote_average).toFixed(2)}/10</Typography>
            <br></br>
              <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${info['poster_path']}`}></img>
              <br></br>
              <p className="overview">{info.overview}</p>
              <div classname="table">
                <Table align="center" size="small">
                  <TableBody>
                    {Object.keys(info).filter((prop) => exclude.indexOf(prop) === -1).map((key) => <TableRow>
                      <TableCell>{key.replaceAll("_", " ")}</TableCell>
                      <TableCell>{`${info[key]}`}</TableCell>
                    </TableRow>)}
                  </TableBody>
                </Table>
              </div>
            </div> : <h1></h1>}
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