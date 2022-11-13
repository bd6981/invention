import React, { useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import Home from "../Home/Home"
import About from '../About/About'
import HowTo from "../HowTo/HowTo"
import Landing from "../Landing/Landing"
import "./App.css"



const App = () => {

    return (
      <div>
        <nav>
          <Link to='/'>
          
            <h1>This is the home page</h1>
          </Link>
          
          <Link to='/About'>About Us</Link>
          <Link to='/HowTo'>Site: How-To</Link>
          <Link to='/Landing'>Landing</Link>
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
  