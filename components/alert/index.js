import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'
import ewoke from './ewoke.svg'


const Alert = ({ kind, alert, children }) => (
  <div className="alerts-wrap">
    <div className={kind}>
      <img src={ewoke} />
      <span className="call-action">{alert}</span>
      <p>{children}</p>
    </div>
  </div>
)

export default Alert

Alert.propTypes = {
  kind: PropTypes.string.isRequired,
  alert: PropTypes.string.isRequired,
}
