import * as React from 'react'

export interface IToast {
  id: string
  type: string
  icon: string
  message: string
}

interface IProps {
  toast: IToast,
  dismissToast: () => void
}

declare class Toast extends React.Component<IProps> { }

export default Toast