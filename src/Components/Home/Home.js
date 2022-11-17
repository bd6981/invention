import React from "react"
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
// import axios from "axios";
import { useState, useEffect } from 'react'


function Home() {
 
 
    return (
      <div>
        <header>
            <h1>Web Of Inventions!</h1>
            <p></p> 
        </header>
        <main>
            <SearchBar type='text' placeholder="Enter" />
            {/* <ListPage searchResults={searchResults} /> */}
        </main>
        
      </div>
    )
}

export default Home




