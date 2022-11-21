//rfce
import React from 'react'
import './Home.css';

function Modal({closeModal}) {
  return (
    <div className="modBack">
        <div className="modContainer">
            <div calssName='titleCloseBtn'>
            </div>
            <div className='title'>
                <h1>Why am I here??</h1></div>
            <div className='body'>
                <p>-Have you ever had an idea and thought, 'I should invent that'? Web of Inventions is an Api driven database. We offer a free, user-friendly tool to search through 10 million Patents from the United States Patent and Trademark Office(USPTO). Future inventors like you, need a way to look up whats aready been done, or how they can do it differently. There are companies that will do patent searches for a charge. But, what if you dont want to pay someone a whole bunch of money just for them to tell you, "Whelp, cant do that." That's why WOI is here for you! Happy Searching My Friend!</p></div>
            <div className='footer'>
                <button className= 'cancelBtn' id='cancelBtn' onClick={() =>closeModal(false)}>Continue</button>
                
            </div>
            
      </div>
    </div>
  )
}

export default Modal
