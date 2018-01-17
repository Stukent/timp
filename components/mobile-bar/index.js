import React from 'react'
import './style.scss'
import dropmenu from './dropmenu.svg'


const MobileBar = () => (
  <div className="mobile-bar-wrapper">
    <div className="queried-bar">
      <div className="logobox">
        <img src={dropmenu} className="dropmenu" />
      </div>
    </div>
  </div>
)

export default MobileBar

