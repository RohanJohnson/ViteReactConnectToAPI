import React, { useState } from "react";
import "./styles.css";
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import {Button, Skeleton, Stack, Typography, Table, TableRow, TableBody, TableCell, Box, LinearProgress, Fade } from '@mui/material'
import { Navigate } from "react-router-dom";

function handleSubmit (event) {
    event.preventDefault();
    const name = event.target.name.value
    const email = event.target.email.value
    const pass = event.target.pass.value
    const pass2 = event.target.pass2.value

    if (pass === pass2){
        createAccount(email,name,pass)
    }else{
        return(
            <p>Passwords do not match</p>
        )
    }

  }

export default function SignUp() {

    // const email = "rohan2@email.com"
    // const name = "rohan2"
    // const pass = "password1"

    // createAccount(email, name, pass)

    return(
        <div className="content">
        <div className="container">
            <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" required={true} ></input>
            
            <br />

            <label htmlFor="name">Username: </label>
            <input type="text" id="name" name="name" required={true} ></input>
            
            <br />

            <label htmlFor="pass">Password: </label>
            <input type="password" id="pass" name="pass" required={true} ></input>

            <br />

            <label htmlFor="pass">Confirm Password: </label>
            <input type="password" id="pass2" name="pass2" required={true} ></input>

            <br />

            <Button className="searchButton" variant="outlined" type="submit">Sign Up</Button>
          </form>
        </div>
        </div>
    )

}

async function createAccount(email, name, pass) {

    console.log(email)

    const url = `http://localhost:3000/newuser?name=${name}&pass=${pass}&email=${email}`

    const config = {
        "method": "get",
        "url": url,
        "headers": {}
    }

    const getUser = await axios(config)
    const user = getUser.data
    if (user != "email is already in use"){
        window.location.href = `/login`
    }
}