import React from "react"
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
import FakeData from "../Data/Data.json";

const Home = () => {
    return (
      <div>
        <header>
            <h1>Web Of Inventions!</h1>
            <p></p> 
        </header>
        <main>
            <SearchBar id='search' placeholder="Enter Name of Patent..." data={FakeData}/>
        </main>
        
      </div>
    )
}

export default Home