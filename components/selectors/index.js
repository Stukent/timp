import React from 'react'
import './style.scss'


const Selectors = () => (
  <div className="selectors">
    <form className="select-form">
      <h3>Take your pick!</h3>
      <label htmlFor="contactChoice1">
        <input
          className="selector-radio"
          type="radio"
          id="contactChoice1"
          name="picker"
        />
        <strong className="selector-strong">Pick me, me, me!</strong>
      </label>

      <label htmlFor="contactChoice2">
        <input
          className="selector-radio"
          type="radio"
          id="contactChoice2"
          name="picker"
        />
        <strong className="selector-strong-two">NO! Pick me!</strong>
      </label>

      <label htmlFor="contactChoice3">
        <input
          className="selector-radio"
          type="radio"
          id="contactChoice3"
          name="picker"
        />
        <strong className="selector-strong-two">Y&apos;all need to chill...</strong>
      </label>

    </form>

  </div>
)

export default Selectors

