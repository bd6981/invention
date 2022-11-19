import React from "react"
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
import InventBar from "../SearchBar/InventBar";
import { useState, useEffect } from 'react'
import Modal from "./Modal"



function Home() {
  // Popup.registerPlugin('prompt', function (defaultValue, placeholder, callback) {
  //   let promptValue = null;
  //   let promptChange = function (value) {
  //       promptValue = value;
  //   };

  const [openModal, setOpenModal] = useState(false)

    return (
      <div>
       
      <button 
      className='openModBtn' 
      onClick={() =>{
      setOpenModal(true);
      }}
      >
      Why am I here??
      </button>
      {openModal && <Modal closeModal={setOpenModal}/>}
  
        <main>
      
       
    
       
          
          <SearchBar type='text' placeholder="Enter" />
          <InventBar type='text' placeholder="Enter" />
        </main>
        
      </div>
    )
}

export default Home




