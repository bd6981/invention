import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [searchedWord, setSearchWord] = useState(null)
  

const  getSearchedWord= async () => {
    axios.get({
      url: '(`https://api.api-ninjas.com/v1/historicalfigures?name=/${data.name}`)',
      headers: {
        'X-Api-Key': 'S9nkSNH9A1t44ENzAlN+iQ==d6uupQmOev54a7Rk'
      },
    }, 
    function(error, response, body) {
      if(error) return console.error('Request failed:', error);
      else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
      else console.log(body)
    });


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon id="searchBtn" />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.name} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
