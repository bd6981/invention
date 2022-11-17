import React, {useState, useEffect} from 'react'
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import Modal from "../Modal"
import ReactDom from 'react-dom'
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
const [isOpen, setIsOpen] = useState(false)
// console.log(matches)
  return (
    <div className="searching">
      
      <input
      type="text" 
      placeholder="Search.."
      onChange={(e) => searchQuery(e.target.value)}
      />
      <div className="BtnSearch" onClick = {() => console.log('clicked')}>
     <button><SearchIcon onClick={() => setIsOpen(true)}/></button>
     <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal></div>
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
