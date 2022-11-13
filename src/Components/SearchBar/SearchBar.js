import React from 'react'
import './SearchBar.css'

function SearchBar({placeholder,data}) {
  return (
    <div classNAme= 'search'>
        <div className='searchInput'>
            <input type='text' placeholder={placeholder}/>
            <div className='searchIcon'></div>
        </div>
        <div className='dataResults'></div>
    </div>
  )
}

export default SearchBar