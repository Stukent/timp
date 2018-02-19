import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import stukent from './stukent.svg'


const Stukent = ({ className }) => (
  <img src={stukent} className={`stukent ${className}`} />
)
Stukent.propTypes = {
  className: PropTypes.string,
}
Stukent.defaultProps = {
  className: '',
}

export default Stukent
