import React, { useState } from "react";
import "./styles.css";
import axios from 'axios';
import { ThemeProvider } from "@emotion/react";
import { LoadingButton } from '@mui/lab';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import { Table, TableRow, TableBody, TableCell, Box, LinearProgress, Fade } from '@mui/material'

const notExclude = ["adult","release_date","original_language","runtime"];



export default function Specific() {

    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(null);


    if (info == null) {


        async function searchMovies(id) {

            let baseURL = `http://localhost:3000/specific?query=`;
            const searchURL = baseURL + id;
            const config = {
                method: 'get',
                url: searchURL,
                headers: {}
            };
            // const response = await axios(config);
            // setLoading(true);

            // setTimeout(() => { setLoading(false); setInfo(response.data); console.log(info) }, 1000 + Math.random() * 2000);

            setInfo(await axios(config));


        }

        let id = window.location.href.slice(window.location.href.lastIndexOf("/") + 1);
        searchMovies(id)

    }


    return (
        <div>
            {info != null && !loading ?
                <div>
                    <br></br>
                    <Typography variant="h3">{info.data.title}</Typography>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div className="flex">
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${info.data['poster_path']}`} width="200px" height="300px"></img>
                        <Typography variant="body1"><Typography variant="h5">Overview</Typography><br></br>{info.data['overview']}</Typography>
                    </div>
                    <Table align="center" size="small">
                                    <TableBody>
                                        {Object.keys(info.data).filter((prop) => notExclude.indexOf(prop) != -1).map((key) => <TableRow>
                                            <TableCell>{key.replaceAll("_", " ")}</TableCell>
                                            <TableCell>{`${info.data[key]}`}</TableCell>
                                        </TableRow>)}
                                    </TableBody>
                                </Table>
                </div>
                : <p>fail</p>}
        </div>
    )

}