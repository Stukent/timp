import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'


const UserNav = ({ user, className, onClick }) => (
  <div className={`sk-user-nav ${className}`}>
    <div>
      <h4 className="user-name">{user.firstName} {user.lastName}</h4>
      <button className="user-type" onClick={onClick}><span className="arrow-down" />As {user.type}</button>
    </div>
    <div className="user-initials">{user.firstName[0]}{user.lastName[0]}</div>
  </div>
)

UserNav.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string,
}
UserNav.defaultProps = {
  className: '',
}

export default UserNav
