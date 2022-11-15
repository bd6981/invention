import React from "react"
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";

const getSearchWord = () => {}
const options = {
  method: 'GET',
  url: 'https://uspto-trademark.p.rapidapi.com/v1/trademarkSearch/amazon/%7BsearchType%7D',
  headers: {
    'X-RapidAPI-Key': 'dd023f70fbmsh75c8c6b1b2f9e79p1aa2a5jsn3c3f9f7dc12f',
    'X-RapidAPI-Host': 'uspto-trademark.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    setWordEntered(response.data); 
}).catch(function (error) {
	console.error(error);
});


useEffect(() => {
    getSearchWord()
}, [])

const Home = () => {
    return (
      <div>
        <header>
            <h1>Web Of Inventions!</h1>
            <p></p> 
        </header>
        <main>
            <SearchBar id='search' placeholder="Enter Name of Patent..." data={getSearchedWord}/>
        </main>
        
      </div>
    )
}

export default Home