import React from "react"
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
import FakeData from "../Data/Data.json";

const Home = () => {
    return (
      <div>
        <header>
            <h1>Web Of Inventions!</h1>
            <p>The search Engine made for you!</p> 
        </header>
        <main>
            <SearchBar id='search' placeholder="Enter Name of Invention..." data={FakeData}/>
            <SearchBar id='search' placeholder="Enter Name of Inventor..." data={FakeData}/>
            <SearchBar id='search' placeholder="Enter Name of Patent..." data={FakeData}/>
        </main>
        
      </div>
    )
}

export default Home