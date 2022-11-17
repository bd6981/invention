import React, { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import About from '../About/About'
import HowTo from "../HowTo/HowTo"
// import Landing from "../Home/Landing"
import Footer from "./Footer"
import Header from "./Header"
import "./App.css"



const App = () => {

    return (
      <div className="App">
        <nav className="nav">
          <Header/>  
        </nav>
        <main>
          <Routes>
            <Route path='/Home' element={ <Home/> } />
            {/* <Route path='/Landing' element={ <Landing/> } /> */}
            <Route path='/About' element={ <About /> } />
            <Route path='/HowTo' element={ <HowTo /> } />
          </Routes>
        </main>
        <Footer className='footer'/>
      </div>
    )
}

export default App
  