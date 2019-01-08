import { configure, addDecorator } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(checkA11y)
addDecorator(withKnobs)

function loadStories() {
  require('../stories/index.js')
}

configure(loadStories, module)