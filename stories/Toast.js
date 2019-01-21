import React from 'react'
import { setAddon, storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import JSXAddon from 'storybook-addon-jsx'

import { text, boolean, number } from '@storybook/addon-knobs'

import Toast from '../components/Toast/Toast'
import * as ToastReadme from '../components/Toast/README.md'

setAddon(JSXAddon)

storiesOf('Toast', module)
  .addDecorator(withReadme(ToastReadme))
  .addWithJSX('all toasts', () => (
    <div>
      <Toast
        toast={{
          id: 1,
          type: '',
          icon: 'trash',
          message: 'I\'m the default toast!',
        }}
        dismissToast={() => {}}
      />
      <Toast
        toast={{
          id: 2,
          type: 'success',
          icon: 'trash',
          message: 'I\'m the success toast!',
        }}
        dismissToast={() => {}}
      />
      <Toast
        toast={{
          id: 3,
          type: 'warning',
          icon: 'trash',
          message: 'I\'m the warning toast!',
        }}
        dismissToast={() => {}}
      />
      <Toast
        toast={{
          id: 4,
          type: 'danger',
          icon: 'trash',
          message: 'I\'m the danger toast!',
        }}
        dismissToast={() => {}}
      />
    </div>
  ))
  .addWithJSX('default toast', () => (<Toast
    toast={{
      id: 5,
      type: text('type', ''),
      icon: text('icon', 'trash'),
      message: text('message', 'Thank you for your feedback!'),
    }}
    dismissToast={() => {}}
  />))
  .addWithJSX('success toast', () => (<Toast
    toast={{
      id: 6,
      type: text('type', 'success'),
      icon: text('icon', 'trash'),
      message: text('message', 'Success! This simulation has been reset.'),
  }}
    dismissToast={() => {}}
  />))
  .addWithJSX('warning toast', () => (<Toast
    toast={{
      id: 7,
      type: text('type', 'warning'),
      icon: text('icon', 'trash'),
      message: text('message', 'Modifying a course currently in session will cause all simulations to be recalculated.'),
  }}
    dismissToast={() => {}}
  />))
  .addWithJSX('danger toast', () => (<Toast
    toast={{
      id: 8,
      type: text('type', 'danger'),
      icon: text('icon', 'trash'),
      message: text('message', 'Simulation failed to save. Contact support if this continues.'),
  }}
    dismissToast={() => {}}
  />))
