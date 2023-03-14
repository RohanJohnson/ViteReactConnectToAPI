import React, { useState } from "react";
import "./styles.css";
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import { Skeleton, Stack, Typography, Table, TableRow, TableBody, TableCell, Box, LinearProgress, Fade } from '@mui/material'

const baseURL = 'http://localhost:3000/search';

const exclude = ["backdrop_path", "title", "popularity", "vote_average", "vote_count", "genre_ids", "id", "poster_path", "original language", "video", "overview", "original_title"];

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

    setTimeout(() => { setLoading(false); }, 1000 + Math.random() * 2000);

    if (loading === true) {
      console.log('loading...')
    }



    const response = await axios(config);
    console.log(response.data[0])
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

            <Box sx={{ margin: '0 20% -3%', width: '60%' }}>
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

            <ul className="posterLinks">
              {info.map(data => (
                <div className="posterLink">
                <img onClick={openMovie(data['title'])}  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data['poster_path']}`} width="200px" height="300px"></img>
                <p>{data['title']}</p>
                </div>
              ))}
            </ul>

            {/* {images(info)} */}
            <br></br>

          </div> : <h1></h1>}
      </div>
    </div>
  );
}



function images(data) {

  console.log(data)

  data.forEach(element => {
    console.log(element)
    return (
      <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${element['poster_path']}`}></img>
    )
  })

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



async function openMovie(name) {
        

  const searchURL = baseURL + `?title=${name}`;
  const config = {
      method: 'get',
      url: searchURL,
      headers: {}
  };

  setLoading(true);

  setTimeout(() => { setLoading(false); }, 1000 + Math.random() * 2000);

  if (loading === true) {
      console.log('loading...')
  }



  const response = await axios(config);
  setInfo(response.data[0]);
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