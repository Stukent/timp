import React from 'react'
import './style.scss'
import intro from './mimic-intro.svg'


const MimicIntro = () => (
  <div className="intro-logo-wrapper">
    <img src={intro} className="mimic-intro" />
  </div>
)

export default MimicIntro
