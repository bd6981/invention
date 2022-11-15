import React from "react"
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
// import Data from './Data.json'
import axios from "axios";

const Home = () => {



    return (
      <div>
        <header>
            <h1>Web Of Inventions!</h1>
            <p></p> 
        </header>
        <main>
            <SearchBar id='search' placeholder="Enter Name of Patent..." data={Data}/>
        </main>
        
      </div>
    )
}

export default Home