import React, { Component } from 'react'
import './style.scss'


class Accordion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    e.preventDefault()
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <div className="accordion-wrapper">
        <button className="accordion" onClick={this.handleClick}> Section 1 </button>
        <div className={`panel ${this.state.open ? '' : 'panel-hidden'}`}>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    )
  }
}

export default Accordion
