import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'


const Button = ({ text, type, className }) => (
  <button className={`sk-btn ${type} ${className}`}>{text}</button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['normal', 'active', 'inactive']),
  className: PropTypes.string,
}
Button.defaultProps = {
  type: 'normal',
  className: '',
}

export default Button

