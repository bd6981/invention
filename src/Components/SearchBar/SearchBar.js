import React, {useState, useEffect} from 'react'
import "./SearchBar.css";
// import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
// import {Input, Card} from "antd"
// import CloseIcon from '@mui/icons-material/Close';


function SearchBar () {
    const [patents, setPatents] = useState([]);
    // const [options, setOptions] = useState([]);
    const [search, setSearch] = useState([]);
    // const wrapperRef = useRef(null);
  
    useEffect (() => {
      const loadSearch = async () =>{
      const response = await axios.get(`https://api.patentsview.org/patents/query?q={"patent_type":"design"}`); 
      setSearch(response.data);
    };
    loadSearch();
  


  }, [])

  console.log(search)


const searchQuery = (text) => {
  if(!text) {
    setPatents([])
  }else{
  let matches = search.filter((data) => {
    const regex = new RegExp(`${text}`, "gi");
    return data.patents.name.match(regex) || data.patents.title.match(regex);
  });
  setPatents()
};
}
// console.log(matches)
  return (
    <div className="searching">
      
      <input
      type="text" 
      placeholder="Search.."
      onChange={(e) => searchQuery.map(e.target.value)}
      />
     <button onClick={setSearch}  >Search</button>
      { patents && patents.map((item, index) => (
      <div key={index} >
          <input title={`data: ${item.name}`}>
          </input>
      </div>
      ))}
      </div>

  )
    }  
      
export default SearchBar;
