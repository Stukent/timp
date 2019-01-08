import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'

storiesOf('Button', module)
  .add('with text', () => (<Button>Hey there!</Button>))
  .add('with really long text', () => (<Button>It seems like there are better ways to do this than put a lot of text on a button but #yolo</Button>))
