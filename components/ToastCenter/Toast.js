import React from 'react'

const Toast = ({ toastMessage = 'I am a toast' }) => (
  <div>
    <h3>Here is the toast!</h3>
    <p>{toastMessage}</p>
  </div>
)

export default Toast
