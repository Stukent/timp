import React from 'react'
import './style.scss'
import Button from '../button'


const Form = () => (
  <div className="stukent-form">
    <form>
      <span className="x-mark">&times; </span>
      <div className="header">
        <strong>Create Your Ad Campaign</strong>
      </div>
      <label className="form-label" htmlFor="campaign-name">
            Campaign Name
        <input name="campaign-name" className="form-input" type="text" />
      </label>
      <label className="form-label" htmlFor="location">
            Location
        <input name="location" className="form-input" type="text" />
      </label>
      <label className="form-label" htmlFor="networks">
            Networks
        <input name="networks" className="form-input" type="text" />
      </label>
      <label className="form-label" htmlFor="budget">
            Budget
        <input name="budget" className="form-input" type="number" />
      </label>
      <div className="button-wrapper">
        <Button text="Go back" />
        <Button text="Save" type="active" />
      </div>

    </form>
  </div>
)

export default Form

