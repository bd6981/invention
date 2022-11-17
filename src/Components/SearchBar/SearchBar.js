import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'

function Searchbar() {
  
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
   
    const [content, setContent] = useState([]);
const fetchSearch = async () => {
    try {
      const { data } = await axios.get((`https://api.patentsview.org/patents/query?q={"patent_type":"design"}`)
      
      )
      setContent(data.results);
      
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchSearch();
    // eslint-disable-next-line
  }, []);
// console.log(response.data)

return (
        <div className="search">
            <form className="searchInputs">
                <input type='text' className="searchBox"label="Searchbar"onChange={(e) => setSearchText(e.target.value)}/>
                    <button onClick={fetchSearch}><SearchIcon  /></button>
                <input value={type} onChange={(event, newValue) => {setType(newValue);}}></input>
            </form>
            <div className="trending">{content && content.map(() => (
                <inputKey key={"patents"} id={'patent_id'} number={'patent_number'} title={'patent_title'}/>
            ))}</div>

        </div>
)}     

export default Searchbar;
