import React from "react"
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
// import axios from "axios";
import { useState, useEffect } from 'react'
// import Modal from "../Modal"


function Home() {
//   const Button_Wrapper_Styles ={
//     position: 'relative',
//     zIndex: 1
  
//   }
 
    return (
      <div>
        <header>
            <h1>Web Of Inventions!</h1>
            <p></p> 
        </header>
        <main>
            <SearchBar type='text' placeholder="Enter" />
            
            {/* <Modal/> */}
            {/* <ListPage searchResults={searchResults} /> */}
        </main>
        
      </div>
    )
}

export default Home




