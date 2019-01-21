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

// const types = {
//   id: string,
//   toast: {
//       id: string,
//       type: string,
//       icon: string,
//       message: string,
//       callback: {
//       fn: function,
//       label: string
//       },
//     },
//   dismissToast: fn (required)
// }

export default ToastCenter
