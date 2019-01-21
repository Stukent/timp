import * as React from 'react'
import { IToast } from '../Toast/Toast';

interface IProps {
  toasts: IToast[]
  toastRemovalFn: () => void
}

declare class ToastCenter extends React.Component<IProps> {}