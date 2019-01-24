import React, { Component } from 'react'

import Icon from '@mdi/react'
import { mdiCheck, mdiAlert, mdiAlertOctagon, mdiInformationOutline, mdiClose } from '@mdi/js'

import './Toast.css'

const IconMap = {
  success: mdiCheck,
  warning: mdiAlert,
  danger: mdiAlertOctagon,
}

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
        <Icon className="toast-icon" path={IconMap[toast.type] ? IconMap[toast.type] : mdiInformationOutline} />
        <p>{toast.message}</p>
        {toast.callback
          ? <button className="toast-btn action-btn" onClick={() => this.callback(toast.id)}>{toast.callback.label || 'Fix this'}</button>
          : (
            <button className="toast-btn dismiss-btn" aria-label="close" onClick={() => this.props.dismissToast(toast.id)}>
              <Icon className="dismiss-btn-icon" path={mdiClose} tabIndex="-1" />
            </button>
            )
          }
      </div>
    )
  }
}

export default Toast
