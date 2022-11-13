import React, {useState} from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder,data}) {
    const [filteredData, setFilteredData] = useState([]);

{/* ===\/==My Filter Component(Display dataResult: filters through like data)=\/== */}    
        const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter=data.filter((value) => {
            return value.title.includes(searchWord);
        });
        setFilteredData(newFilter);   
    };
{/*---------------------------------------------------------------------------- */}        

  return (
    <div className= 'search'>
{/* ===\/===My SearchBar component eith a placeholder and icon===\/== */}
        <div className='searchInput'>
            <input type='text' placeholder={placeholder} onChange={handleFilter}/>
            <div className='searchIcon'><SearchIcon/></div>
        </div>
{/*---------------------------------------------------------------------------- */}

{/*Display Data grab data, loop through element, value.title displays title for each*/}
        {filteredData.length != 0 && (

        <div className ='dataResult'> 
        {filteredData.map((value, key) => {
{/* ==\/====<a> allows me to link element the value==\/== */}
          return (
          <a className= 'dataItem' href={value.link} target="_blank">
           <p>{value.title}</p>
            </a>
          );
          })}
        </div>
        )}
    </div>
  );
}

export default SearchBar