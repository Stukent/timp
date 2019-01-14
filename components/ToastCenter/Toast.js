import React, { Component } from 'react'

import './Toast.css'

class Toast extends Component {
  componentDidMount() {
    if (!this.props.toast.callback && this.props.toast.type !== 'danger') {
      // setTimeout(() => this.props.toastSelfRemoval(this.props.toast.id), 3500)
    }
  }

  render() {
    // const { toast, index, performAction, actions, history } = this.props
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
        {toast.callback && <button className="btn btn-primary action" onClick={() => toast.callback.fn()}>{toast.callback.label || 'Fix this'}</button>}
        {/* {toast.action && <button className="btn btn-primary action" onClick={() => performAction(toast, actions, history)}>Fix this</button>} */}
        {/* <button className="btn btn-clear float-right" onClick={() => actions.hideToast(index)} /> */}
        <button className="btn btn-clear float-right" onClick={() => {}} />
      </div>
    )
  }
}

// const types = {
//   toast: {
//     type: text,
//     icon: text,
//     message: text,
//     callback: {
//      fn: fn,
//      label: text
//    },
//   },
// }

export default Toast
