import React from "react"
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
import InventBar from "../SearchBar/InventBar";
import { useState, useEffect } from 'react'



function Home() {


    return (
      <div>
        <header>
        </header>
        <main>
            <SearchBar type='text' placeholder="Enter" />
            <InventBar type='text' placeholder="Enter" />
        </main>
        
      </div>
    )
}

export default Home




