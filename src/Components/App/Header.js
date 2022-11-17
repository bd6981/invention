import CottageSharpIcon from '@mui/icons-material/CottageSharp';
import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <header>
            <Link to='/Home'>
            <CottageSharpIcon />
            </Link>
            <Link to='/About'><button id='nav' variant="outlined">About</button></Link>
            <Link to='/HowTo'><button id='nav' variant="outlined">How-To</button></Link>
        </header>
    </div>
  )
}

export default Header
