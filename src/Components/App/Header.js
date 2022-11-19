import CottageSharpIcon from '@mui/icons-material/CottageSharp';
import React from "react"
import { Link } from "react-router-dom"
import './header.css' 

const Header = () => {
  return (
    <div>
        <header>
        
            <Link to='/Home'>
            <CottageSharpIcon className='houseIcon'> </CottageSharpIcon>
            </Link>
            
            <Link className='aboutBtn' to='/About' id='nav' variant="outlined">About</Link>
            <Link className='howBtn' to='/HowTo' id='nav' variant="outlined">Intro</Link>
        </header>
    </div>
  )
}

export default Header
