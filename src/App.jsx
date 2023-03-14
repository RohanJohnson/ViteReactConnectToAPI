import React from "react";
import "./styles.css";
import Movies from "./Movies";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Search";
import HomePage from "./HomePage";
import Test from "./Test";
import Signin from "./Signin";
import Signup from "./Signup";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/searchmovie" element={<Search />} />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>


  );
}

function Home() {
  return <h1>Home page</h1>;
}





