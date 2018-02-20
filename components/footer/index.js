import React from 'react'
import './style.scss'
import Stukent from '../stukent-brand/stukent'

const Footer = () => (
  <div className="sk-footer">
    <h3 className="contact-title">Contact</h3>
    <address className="contact-info">
      Stukent, Inc.<br />
      1154 Stocks Avenue<br />
      Rexburg, ID 83440<br />
      Toll Free: +1 855 STU KENT<br />
      <br />
      <b>E-mail: Support@Stukent.com</b>
    </address>
    <Stukent />
  </div>
)

export default Footer
