import React from 'react'
import './style.scss'
import Close from './close.svg'
import Check from './check.svg'

const ResponsiveAlert = () => (
  <div className="mobile-alert">
    <div className="content-wrapper">
      <div className="close">
        <img src={Close} />
      </div>

      <div className="avatar" />

      <div className="alert">
        <h2>Great!</h2>
      </div>

      <div className="message">
        <h3 className="sub-title"> Here&apos;s a tip: </h3>
        <p>When creating an ad it would be extra helpful to use the target keywords in the description.</p>
        <p> The same goes for landing pages of the product on sale.</p>
      </div>

      <div className="button">
        <button>
          Okay!
        </button>
      </div>

    </div>

  </div>
)

export default ResponsiveAlert
