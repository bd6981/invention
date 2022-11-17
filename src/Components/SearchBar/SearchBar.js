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

  // console.log(search)


let searchQuery = (text) => {
  if(!text) {
    setPatents([])
    console.log("inside search")
  }else{
  let matches = search.patents.filter((data) => {
    const regex = new RegExp(`${text}`, "gi");
    return data.patent_title.match(regex);
  });
  
  setPatents(matches)

};
}
// console.log(matches)
  return (
    <div className="searching">
      
      <input
      type="text" 
      placeholder="Search.."
      onChange={(e) => searchQuery(e.target.value)}
      />
     <button onClick={setSearch}  >Search</button>
      { patents && patents.map((item, index) => (
      <div key={index} >
         {console.log(item)}
          <input value={`data: ${item.patent_title}`}>
          </input>
      </div>
      ))}
      </div>

  )
    }  
      
export default SearchBar;
