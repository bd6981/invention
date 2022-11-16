import React, { useState, useEffect } from "react"
import { Route, Routes, Link } from "react-router-dom"
import Home from "../Home/Home"
import About from '../About/About'
import HowTo from "../HowTo/HowTo"
import "./App.css"
import CottageSharpIcon from '@mui/icons-material/CottageSharp';


const App = () => {

    return (
      <div className="App">
        <nav className="nav">
          <Link to='/'>
            <CottageSharpIcon />
          </Link>
          <Link to='/About'><button id='nav' variant="outlined">About</button></Link>
          <Link to='/HowTo'><button id='nav' variant="outlined">How-To</button></Link>
          
        </nav>
        <main>
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/howTo' element={ <HowTo /> } />
          </Routes>
        </main>
      </div>
    )
}

export default App
  