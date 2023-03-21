import React, { useState } from "react";
import "./styles.css";
import axios from 'axios';
import { ThemeProvider } from "@emotion/react";
import { LoadingButton } from '@mui/lab';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import { Table, TableRow, TableBody, TableCell, Box, LinearProgress, Fade } from '@mui/material'



export default function Specific() {
    

    let id = window.location.href.slice(window.location.href.lastIndexOf("/")+1)

    let info = searchMovies(id)

    console.log("...........")
    console.log(info);

    console.log(info["poster_path"])






return(
    <div>
    {typeof info == "object" ?
        <div id="test">
            <br></br>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${info.poster_path}`}></img>
            <div id="testcon">
                <Typography variant="h6" >{info.title}</Typography>
                <br></br>
                <Typography variant="p" id="testoverview">{info.overview}</Typography>

                <div id="testtable">
                    <Table align="center" size="small">
                        <TableBody>
                            {Object.keys(info).filter((prop) => exclude.indexOf(prop) === -1).map((key) => <TableRow>
                                <TableCell>{key.replaceAll("_", " ")}</TableCell>
                                <TableCell>{`${info[key]}`}</TableCell>
                            </TableRow>)}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div> : <h1>test</h1>}
        </div>
)
}


async function searchMovies(id) {

    let baseURL = `http://localhost:3000/specific?query=`;
    const searchURL = baseURL + id;
    const config = {
        method: 'get',
        url: searchURL,
        headers: {}
    };





    const response = await axios(config);
    console.log(response.data)
    return(response.data);
}