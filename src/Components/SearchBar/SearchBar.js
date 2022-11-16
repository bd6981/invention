import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'

function SearchBar({placeholder}) {//component and props
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [data, setData] = useState([])
const handleFilter =async (event) => { 
    setWordEntered(event.target.value)
            
    const response = await axios.get(`https://api.api-ninjas.com/v1/historicalfigures?name=${wordEntered}`,{headers : {
                'X-Api-Key': 'S9nkSNH9A1t44ENzAlN+iQ==d6uupQmOev54a7Rk'
              }})
       
    setData(response.data)
        console.log(data)
          
    const newFilter = data.filter((value) => {//my variable to filter iit will return the boolean below in return statement
        return value.setWordEntered.toLowerCase().includes(wordEntered.toLowerCase());
    });//above lets the user type lowercase to get their search results 
    
            //change Title to name //
        // if (wordEntered === ("")) {//this clears privous input in field for new search
        //     setFilteredData([]);
        // } else {
        //     setFilteredData(newFilter);
        
        };

        const clearInput = () => {//representing the value of my emply sting wordEntered("") 
        setFilteredData([]);
        setWordEntered("");
        };
    
        return (
        <div className="search">
            <div className="searchInputs">
            <input
        type="text"
        placeholder={placeholder}
        value={wordEntered}
        onChange={handleFilter}
            />
            <div className="searchIcon">
             {filteredData.length === 0 ? (//shows searchIcon
                <SearchIcon />
                ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
            </div>
            </div>
            {filteredData.length != 0 && (//shows closeIcon once user starts typing 
                // Data\Set: this is my results and map by value and key/
            <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {//shows 15 options on dropdown
                 return (//change title to name and get rid of link this is the display on search
                 <a className="dataItem" href={value.data} target="_blank">
                    <p>{value.ti} </p>
            
                    </a>
                 );
             })}
            </div>
         )}
        </div>
        );
        }

export default SearchBar;