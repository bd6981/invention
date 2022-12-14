import React, {useState, useEffect} from 'react'
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";


function InventBar () {
    const [patents, setPatents] = useState([]);
    const [search, setSearch] = useState([]);
   
  
    useEffect (() => {
      const loadSearch = async () =>{
      const response = await axios.get(`https://api.patentsview.org/patents/query?q={"patent_type":"utility"}`); 
      setSearch(response.data);
    };
    loadSearch();
 
  }, [])

    let searchQuery = (text) => {
  if(!text) {
    setPatents([])
   
  }else{
  let matches = search.patents.filter((data) => {
    const regex = new RegExp(`${text}`, "gi");
    return data.patent_title.match(regex);
  });
  
  setPatents(matches)

};
}


  return (
    <div className="searching">
      <form className='drop'>
      <select>
        <option value = "utility">Utility</option>
        <option value = "design">Design</option>
        <option value = "stationary">Stationary</option>
        <option value = "govern">Govern</option>

      </select>
      </form>
      <input
      type="text" 
      className='invenSearch'
      placeholder="Search Patent by Utility"
      onChange={(e) => searchQuery(e.target.value)}/>
      <div className="BtnSearch" onClick = {() => console.log('clicked')}/>
     
      { patents && patents.map((item, index) => (
      <div key={index} >
          <input value={`data: ${item.patent_title}`}>
          </input>
      </div>
      ))}
      </div>

  )
    }  
      
export default InventBar;
