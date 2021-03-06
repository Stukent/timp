import React from 'react'
import './style.scss'
import hint from './hints.svg'
import note from './note.svg'


const Bottombar = () => (
  <div className="topbar">
    <div className="icons-wrapper">
      <div className="logobox">
        <img src={hint} alt="hints" />
      </div>
      <img src={note} className="note" alt="notes" />
    </div>


  </div>
)

export default Bottombar

