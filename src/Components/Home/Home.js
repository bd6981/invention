import React from "react"
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";



const Home = () => {



    return (
      <div>
        <header>
            <h1>Web Of Inventions!</h1>
            <p></p> 
        </header>
        <main>
            <SearchBar id='search' placeholder="Enter Name..."/>
        </main>
        
      </div>
    )
}

export default Home