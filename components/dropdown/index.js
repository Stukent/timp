import React from 'react'
import './style.scss'


const Dropdown = () => (
  <div className="dropdowns">
    <div className="dropdown">
      <div className="dropbtn">Dropdown</div><span className="down" />
      <ul className="dropdown-content">
        <li><a href="#">item</a></li>
        <li><a href="#">item</a></li>
        <li><a href="#">item</a></li>
        <li><a href="#">item</a></li>
      </ul>
    </div>
  </div>
)

export default Dropdown

