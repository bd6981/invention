import React, { useState, useEffect } from "react"
import { Route, Routes, Link } from "react-router-dom"
import Home from "../Home/Home"
import About from '../About/About'
import HowTo from "../HowTo/HowTo"
import Landing from "../Landing/Landing"
import "./App.css"
import CottageSharpIcon from '@mui/icons-material/CottageSharp';
import {QueryClient, QueryClientProvider} from "react-query"


// function ReactQuery () {
//   const client = new QueryClient();
// }
//     fetch ('https://api.patentsview.org/patents/query?q={"_gte":{"patent_date":"2007-01-04"}}')
//     .then((res) => res.json ())
//     .then((res) => {
//       setData(resp);
//     });
//   }, []);


const App = () => {

    return (
      <div className="App">
        <nav className="nav">
          <Link to='/'>
            <CottageSharpIcon />

          </Link>
          
          <Link to='/About'><button id='nav' variant="outlined">About</button></Link>
          <Link to='/HowTo'><button id='nav' variant="outlined">How-To</button></Link>
          <Link to='/Landing'><button id='nav' variant="outlined">Landing</button></Link>
        </nav>
        <main>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/howTo' element={ <HowTo /> } />
            <Route path='/landing' element={ <Landing /> } />
          </Routes>
        </main>
      </div>
    )
}

export default App
  