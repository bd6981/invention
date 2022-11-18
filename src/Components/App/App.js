import React, { useState, useEffect, Link } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import About from '../About/About'
import HowTo from "../HowTo/HowTo"
import Footer from "./Footer"
import Header from "./Header"
import "./App.css"


const App = () => {
 

    return (
      
      <div className="App">
        
      <nav className="nav">
          <title>
          
          </title>
          <Header className="App-header"/>  
        </nav>
        <main>
          <div>
            <h3>Web</h3> 
            <h4>of</h4>
            <h3>Inventions</h3>
          </div>
          
          
          <Routes>
          <Route path='/About' element={ <About /> } />
            <Route path='/Home' element={ <Home/> } />
            <Route path='/HowTo' element={ <HowTo /> } />
          </Routes>
        </main>
        <Footer className='footer'/>
      </div>
    )
}

export default App
  