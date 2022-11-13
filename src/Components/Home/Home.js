import React from "react"
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
import FakeData from "../Data/Data.json";
const Home = () => {
    return (
      <div>
        <header>
            <h1>Welcome To The World Of Inventions!</h1>
            <p>The search Engine made for you!</p> 
        </header>
        <main>
            <SearchBar placeholder="Enter Name of Inventon..." data={FakeData}/>
            
        </main>
        
      </div>
    )
}

export default Home