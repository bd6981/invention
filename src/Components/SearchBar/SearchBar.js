import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'

function SearchBar({placeholder}) {//component and props
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [data, setData] = useState([])

const handleChange =async (event) => { 
    event.preventDefault();
    setWordEntered(event.target.value)

    const response = await axios.get(`https://api.patentsview.org/patents/query?q={"_or":[{"inventor_last_name":["Whitney","Hopper"]},{"_text_any":{"patent_title":"COBOL cotton gin"}}]}`)

    setData(response.data)
        console.log(response.data)
       

  //my variable to filter iit will return the boolean below in return statement
    const newFilter = handleChange.filter((value) => {//my variable to filter iit will return the boolean below in return statement
        return value.setWordEntered.toLowerCase().includes(wordEntered.toLowerCase());
});


            //change Title to name //
        if (wordEntered === ("")) {//this clears privous input in field for new search
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);

        };
    }
        const clearInput = () => {//representing the value of my emply sting wordEntered("") 
            setFilteredData([]);
            setWordEntered("");
            };
    
            return (
            <div className="search">
                <div className="searchInputs">
                <input type="text" placeholder={placeholder}value={wordEntered.data}onChange={handleChange}
                />
                <div className="searchIcon">
                 {filteredData.length === 0 ? (//shows searchIcon
                    <SearchIcon />
                    ) : (
                    <CloseIcon id="clearBtn" onClick={clearInput}  />
                    )}
                </div>
                </div>
                {filteredData.length != 0 && (//shows closeIcon once user starts typing 
                    // Data\Set: this is my results and map by value and key/
                <div className="dataResult">
                    {filteredData.map((value, key) => {//shows 15 options on dropdown -slice(0, 15)
                     return (//change title to name and get rid of link this is the display on search
                     <a className="dataItem"  target="_blank">
                        <p>{data.name} </p></a>
                     );
                 })}
                </div>
             )}
            </div>
          )}
            
    
    export default SearchBar;
// function SearchBar() {
//     const urlForApi = `https://api.patentsview.org/patents/query?q={"_or":[{"inventor_last_name":["Whitney","Hopper"]},{"_text_any":{"patent_title":"COBOL cotton gin"}}]}`

//     const [queryData, setQueryData] = useState([])
//     const [searchData, setSearchData] = useState('')
//     const [wordEntered, setWordEntered] = useState("");
//     // const [filteredData, setFilteredData] = useState([]);
    
   
// // const handleFilter =async (event) => { 
    

// //     const response = await 
// //     axios.get(`https://api.patentsview.org/patents/query?q={"_or":[{"inventor_last_name":["Whitney","Hopper"]},{"_text_any":{"patent_title":"COBOL cotton gin"}}]}`)
//     const getQueryData = () => { 
// //fetching Api
//         searchData &&
//         axios.get(urlForApi).then(response => setQueryData(response.data.searchData))
//         .catch(error => alert('try again',))
      
//     }
//         useEffect(() => {getQueryData()},[searchData])
    
//     const handleSubmit = () => {
//         setSearchData(wordEntered)
//         getQueryData()
//     }   
  

//     //      const newWordEntered = data.filter((value) => {
//     //     return value.setWordEntered.toLowerCase().includes(wordEntered.toLowerCase());
//     //     if (wordEntered === ("")) {
//     //         setQueryData([]);
//     //     } else {
//     //         setQueryData(newQuery);
//     //     }})
        
//     //     const clearInput = () => {//representing the value of my emply sting wordEntered("") 
//     //     setFilteredData([]);
//     //     setWordEntered("");
//     //     };
//         return (
//         <div className="search">
//              <div className="searchInputs">
//                  <input type="text"  value={setWordEntered} onChange={getQueryData}/>
//             <div className="searchIcon">
//                  {searchData.length === 0 ? (//shows searchIcon
//                 <SearchIcon/>
//                  ) : ( 
//              <CloseIcon id="clearBtn"  />
//                   )} 
//             </div>
//             </div>
//                {/* {queryData.length != 0 && (//shows closeIcon once user starts typing  */} 
// //             // Data\Set: this is my results and map by value and key/
//             <div className="dataResult">
//                 {/* {queryData.slice(0, 15).map((value, key) => {//shows 15 options on dropdown */}
//                 {/* return (//change title to name and get rid of link this is the display on search */}
//                     <a className="dataItem" target="_blank">
//                         <p>{}</p></a>
             
//         </div>
                
//     </div>
//         )}
        
// export default SearchBar;