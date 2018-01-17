import React from 'react'
import './style.scss'
import Close from './close.svg'


const ModalSmall = () => (
  <div className="mocontainer">

    <div className="modal-small">
      <div className="exit">
        <img src={Close} />
      </div>
      <div className="modal-content">
        <h2>Can&apos;t find your size?</h2>
        <p>
          You can always feel free to send us an email with your size and
          shoe model and we will send it to your house with a 50% discount of shipping!
        </p>
      </div>

      <div className="action">
        <button className="back-btn"><a href="#ignore"> Go back</a></button>
        <button className="cart-btn"><a href="#gnore"> Add To Cart </a></button>
      </div>

    </div>
  </div>

)

export default ModalSmall
