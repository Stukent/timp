import React from 'react'
import './style.scss'
import Close from './close.svg'


const ModalInvert = () => (
  <div className="invert-container">

    <div className="modal-invert">
      <div className="exit">
        <img src={Close} />
      </div>
      <div className="modal-content-invert">
        <h2>Can&apos;t find your size?</h2>
        <p>
          You can always feel free to send us an email with your size and shoe
          model and we will send it to your house with a 50% discount of shipping!
        </p>
      </div>

      <div className="call-to-action">
        <button className="back-invt"><a href="#ignore"> Go back</a></button>
        <button className="cart-invt"><a href="#ignore"> Add To Cart </a></button>
      </div>
    </div>
  </div>

)

export default ModalInvert
