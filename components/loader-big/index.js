import React from 'react'
import './style.scss'
import loaderbig from './loader_large.gif'


const BigLoader = () => (
  <div className="loader-big-wrapper">
    <img src={loaderbig} className="big-loader" />
  </div>
)

export default BigLoader
