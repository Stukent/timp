import React from 'react'
import './style.scss'
import MimicBlue from './mp-blue.svg'
import Calendar from './calendar.svg'
import Hints from './hints.svg'
import Note from './note.svg'


const DisplaySidebar = () => (
  <div className="display-sidebar">
    <div className="logobox">
      <img src={MimicBlue} className="mimiclogo" />
    </div>
    <div className="iconsbox">
      <img src={Calendar} className="demo-list" />
      <img src={Hints} className="demo-list" />
      <img src={Note} className="demo-list" />
    </div>


  </div>
)

export default DisplaySidebar

