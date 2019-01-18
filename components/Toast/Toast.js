import React, { Component } from 'react'

import './Toast.css'

class Toast extends Component {
  componentDidMount() {
    if (!this.props.toast.callback && this.props.toast.type !== 'danger') {
      setTimeout(() => this.props.dismissToast(this.props.toast.id), 3500)
    }
  }

  callback = (id) => {
    this.props.toast.callback.fn()
    this.props.dismissToast(id)
  }

  render() {
    const { toast } = this.props

    return (
      <div
        className={`toast toast-${toast.type}`}
        role="alert"
      >
        {toast.icon && (
          <i className={`icon fa ${toast.icon}`} />
        )}
        <span>{toast.message}</span>
        {toast.callback
          ? <button className="btn btn-primary action" onClick={() => this.callback(toast.id)}>{toast.callback.label || 'Fix this'}</button>
          : <button className="btn btn-clear" onClick={() => this.props.dismissToast(toast.id)} /> }
      </div>
    )
  }
}

// const types = {
//   toast: {
//    id: string
//    type: string,
//    icon: string,
//    message: string,
//    callback: {
//     fn: fn,
//     label: string
//    },
//   },
//  dismissToast: fn (required)
// }

export default Toast
