import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'

import { text, boolean, number } from '@storybook/addon-knobs'


import Toast from '../components/ToastCenter/Toast'
import ToastCenter from '../components/ToastCenter/ToastCenter'
import * as ToastReadme from '../components/ToastCenter/README.md'

storiesOf('Toast Center', module)
  .addDecorator(withReadme(ToastReadme))
  .add('with a toast', () => (<ToastCenter><Toast /></ToastCenter>))

storiesOf('Toast', module)
  // .addDecorator(withKnobs)
  .add('success toast', () => (<Toast toastMessage={text('toastMessage', 'hey')} />))
