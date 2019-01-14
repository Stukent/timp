import React, { Component } from 'react'

import Toast from './Toast'

import './ToastCenter.css'

class ToastCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // toasts: [],
    }
  }

  toastSelfRemoval = (id) => {
    const removeIndex = this.props.toasts.findIndex(toast => toast.id === id)
    this.props.actions.hideToast(removeIndex)
  }

  render() {
    const { toasts } = this.props
    return (
      <div className="app-toast-center">
        <p>Hey</p>
      </div>
    )
  }
}

export default ToastCenter
