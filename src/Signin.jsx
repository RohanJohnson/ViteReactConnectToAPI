import React, { useState } from "react";
import "./styles.css";
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import { Button, Skeleton, Stack, Typography, Table, TableRow, TableBody, TableCell, Box, LinearProgress, Fade } from '@mui/material'

const url = "http://localhost:3000/getusers"

const config = {
    "method": "get",
    "url": url,
    "headers": {}
}

export default function SignIn() {

    return (
        <div className="content">
        <div className="container">
            <form onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required={true} ></input>

                <br />

                <label htmlFor="pass">Password: </label>
                <input type="password" id="pass" name="pass" required={true} ></input>

                <br />

                <Button className="searchButton" variant="outlined" type="submit">Sign In</Button>
            </form>
        </div>
        </div>
    )
}