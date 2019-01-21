import { configure, addDecorator } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

const req = require.context('../stories', false, /\.js$/)

addDecorator(checkA11y)
addDecorator(withKnobs)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)