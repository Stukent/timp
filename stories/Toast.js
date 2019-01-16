import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import { text, boolean, number } from '@storybook/addon-knobs'


import Toast from '../components/Toast/Toast'
import * as ToastReadme from '../components/ToastCenter/README.md'

storiesOf('Toast', module)
  .addDecorator(withReadme(ToastReadme))
  .add('all toasts', () => (
    <div>
      <Toast toast={{
        type: '',
        icon: 'trash',
        message: 'I\'m the default toast!',
        }}
      />
      <Toast toast={{
        type: 'success',
        icon: 'trash',
        message: 'I\'m the success toast!',
        }}
      />
      <Toast toast={{
        type: 'warning',
        icon: 'trash',
        message: 'I\'m the warning toast!',
        }}
      />
      <Toast toast={{
        type: 'danger',
        icon: 'trash',
        message: 'I\'m the danger toast!',
        }}
      />
    </div>
  ))
  .add('default toast', () => (<Toast toast={{
    type: text('type', ''),
    icon: text('icon', 'trash'),
    message: text('message', 'Thank you for your feedback!'),
  }}
  />))
  .add('success toast', () => (<Toast toast={{
    type: text('type', 'success'),
    icon: text('icon', 'trash'),
    message: text('message', 'Success! This simulation has been reset.'),
  }}
  />))
  .add('warning toast', () => (<Toast toast={{
    type: text('type', 'warning'),
    icon: text('icon', 'trash'),
    message: text('message', 'Modifying a course currently in session will cause all simulations to be recalculated.'),
  }}
  />))
  .add('danger toast', () => (<Toast toast={{
    type: text('type', 'danger'),
    icon: text('icon', 'trash'),
    message: text('message', 'Simulation failed to save. Contact support if this continues.'),
  }}
  />))
