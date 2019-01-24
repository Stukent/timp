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
    <div id="story-root">
      <Toast
        toast={{
          id: 1,
          type: '',
          message: 'I\'m the default toast!',
        }}
        dismissToast={() => {}}
      />
      <Toast
        toast={{
          id: 2,
          type: 'success',
          message: 'I\'m the success toast!',
        }}
        dismissToast={() => {}}
      />
      <Toast
        toast={{
          id: 3,
          type: 'warning',
          message: 'I\'m the warning toast!',
        }}
        dismissToast={() => {}}
      />
      <Toast
        toast={{
          id: 4,
          type: 'danger',
          message: 'I\'m the danger toast!',
        }}
        dismissToast={() => {}}
      />
    </div>
  ))
  .addWithJSX('default toast', () => (
    <div id="story-root">
      <Toast
        toast={{
          id: 5,
          type: text('type', ''),
          message: text('message', 'Thank you for your feedback!'),
        }}
        dismissToast={() => {}}
      />
    </div>))
  .addWithJSX('success toast', () => (
    <div id="story-root">
      <Toast
        toast={{
          id: 6,
          type: text('type', 'success'),
          message: text('message', 'Success! This simulation has been reset.'),
        }}
        dismissToast={() => {}}
      />
    </div>))
  .addWithJSX('warning toast', () => (
    <div id="story-root">
      <Toast
        toast={{
          id: 7,
          type: text('type', 'warning'),
          message: text('message', 'Modifying a course currently in session will cause all simulations to be recalculated.'),
        }}
        dismissToast={() => {}}
      />
    </div>))
  .addWithJSX('danger toast', () => (
    <div id="story-root">
      <Toast
        toast={{
          id: 8,
          type: text('type', 'danger'),
          message: text('message', 'Simulation failed to save. Contact support if this continues.'),
        }}
        dismissToast={() => {}}
      />
    </div>))
