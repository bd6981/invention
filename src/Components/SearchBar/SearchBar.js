import React, {useState} from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({placeholder,data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

{/* ===\/==My Filter Component(Display dataResult: filters through like data)=\/== */}    
        const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord)
        const newFilter=data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === " ") {
            setFilteredData([])
        }else{
        setFilteredData(newFilter); 
        }  
    };
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");

    }
      

  return (
    <div className= 'search'>
{/* ===\/===My SearchBar component eith a placeholder and icon===\/== */}
        <div className='searchInput'>
            <input type='text' placeholder={placeholder} value= {wordEntered} onChange={handleFilter}/>
            <div className='searchIcon'>
                {filteredData.length === 0 ? (
                <SearchIcon/>
                ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
                </div>
        </div>
{/*---------------------------------------------------------------------------- */}

{/*Display Data grab data, loop through element, value.title displays title for each*/}
        {filteredData.length != 0 && (

        <div className ='dataResult'> 
        {filteredData.slice(0, 15).map((value, key) => {
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