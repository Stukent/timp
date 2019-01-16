// eslint-disable import/no-extraneous-dependencies
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'

import ToastCenter from '../components/ToastCenter/ToastCenter'
import * as ToastCenterReadme from '../components/ToastCenter/README.md'


storiesOf('Toast Center', module)
  .addDecorator(withReadme(ToastCenterReadme))
  .add('with a toast', () => {
    const toasts = [{ type: 'success', icon: 'trash', message: 'Success! Your request was processed.' }]
    const removeToast = () => (console.log('firing 2'))
    return (<ToastCenter toasts={toasts} toastRemovalFn={removeToast} />)
  })
