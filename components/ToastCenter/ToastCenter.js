import React, { Component } from 'react'

import Toast from '../Toast/Toast'

import './ToastCenter.css'

class ToastCenter extends Component {
  toastSelfRemoval = (id) => {
    console.log('firing!')
    this.props.toastRemovalFn()
  }

  render() {
    const { toasts } = this.props
    return (
      <div className="app-toast-center">
        {
          toasts.length > 0 && toasts.map(toast => <Toast toast={toast} toastSelfRemoval={this.toastSelfRemoval} />)
        }
      </div>
    )
  }
}

export default ToastCenter
