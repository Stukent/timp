import React, { Component } from 'react'

import Toast from '../Toast/Toast'

import './ToastCenter.css'

class ToastCenter extends Component {
  dismissToast = (id) => {
    this.props.toastRemovalFn(id)
  }

  render() {
    const { toasts } = this.props
    return (
      <div className="app-toast-center">
        {
          toasts.length > 0 && toasts.map(toast => <Toast toast={toast} key={toast.id} dismissToast={this.dismissToast} />)
        }
      </div>
    )
  }
}

export default ToastCenter
