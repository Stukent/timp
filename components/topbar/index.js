import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'
import { Stukent } from '../stukent-brand'
import UserNav from './user-nav'


class Topbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userNavOpened: false }
    this.handleUserNavClicked = this.handleUserNavClicked.bind(this)
  }

  handleUserNavClicked() {
    this.state = this.setState({
      userNavOpened: !this.state.userNavOpened,
    })
  }

  render() {
    return (
      <div className={`sk-topbar ${this.props.className}`}>
        <div className="container">
          <a href={this.props.logoLink} className="logo">
            { this.props.logo }
          </a>
          <span className="vertical-bar" />
          <UserNav user={this.props.user} onClick={this.handleUserNavClicked} className="user-nav" />
        </div>
        {(this.state.userNavOpened) ? (
          <ul className="dropdown">
            <a href="/users/signout"><li>Home</li></a>
            <a href="https://www.stukent.com/terms-and-conditions/"><li>Terms and Conditions</li></a>
            <a href="https://www.stukent.com/refund-policy/"><li>Refund Policy</li></a>
          </ul>
          ) : null}
      </div>
    )
  }
}


Topbar.propTypes = {
  logoLink: PropTypes.string,
  logo: PropTypes.element,
  user: PropTypes.object,
  className: PropTypes.string,
}
Topbar.defaultProps = {
  logoLink: '/',
  logo: <Stukent />,
  user: { firstName: 'John', lastName: 'Doe', type: 'Student' },
  className: '',
}

export default Topbar

