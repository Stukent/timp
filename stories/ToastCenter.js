// eslint-disable import/no-extraneous-dependencies
import React from 'react'
import { setAddon, storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import JSXAddon from 'storybook-addon-jsx'
import { State, Store } from '@sambego/storybook-state'

import ToastCenter from '../components/ToastCenter/ToastCenter'
import * as ToastCenterReadme from '../components/ToastCenter/README.md'

setAddon(JSXAddon)

storiesOf('Toast Center', module)
  .addDecorator(withReadme(ToastCenterReadme))
  .addWithJSX('with a success toast', () => {
    const store = new Store({
      toasts: [{
        type: 'success', message: 'Success! Your request was processed.', id: 'success-1',
      }],
    })
    const removeToast = () => {
      const toasts = store.get('toasts')
      toasts.pop()
      store.set({ toasts })
    }
    const addToast = () => {
      const toasts = store.get('toasts')
      const newToast = {
        type: 'success', message: 'Success! Your request was processed.', id: `success-${toasts.length + 1}`,
      }
      toasts.push(newToast)
      store.set({ toasts })
    }
    return (
      <div id="story-root">
        <State store={store}>
          <ToastCenter toasts={store.get('toasts')} toastRemovalFn={removeToast} />
          <button onClick={addToast}>New Toast</button>
        </State>
      </div>
    )
  })
  .addWithJSX('with a danger toast', () => {
    const store = new Store({
      toasts: [{
        type: 'danger', message: 'Request failed. Server responded with error: 404 - Not Found', id: 'danger-1',
      }],
    })
    const removeToast = () => {
      const toasts = store.get('toasts')
      toasts.pop()
      store.set({ toasts })
    }
    const addToast = () => {
      const toasts = store.get('toasts')
      const newToast = {
        type: 'danger', message: 'Request failed. Server responded with error: 404 - Not Found', id: `danger-${toasts.length + 1}`,
      }
      toasts.push(newToast)
      store.set({ toasts })
      console.log(toasts)
    }
    return (
      <div id="story-root">
        <State store={store}>
          <ToastCenter toasts={store.get('toasts')} toastRemovalFn={removeToast} />
          <button onClick={addToast}>New Toast</button>
        </State>
      </div>
    )
  })
  .addWithJSX('with toast with a callback', () => {
    const store = new Store({
      toasts: [{
        id: 'callback-1', type: 'success', message: 'Invalid input. Click here to fix this.', callback: { fn: () => alert('Toast clicked!'), label: 'Go to place to fix this' },
      }],
    })
    const removeToast = () => {
      const toasts = store.get('toasts')
      toasts.pop()
      store.set({ toasts })
    }
    const addToast = () => {
      const toasts = store.get('toasts')
      const newToast = {
        id: `callback-${toasts.length + 1}`, type: 'success', message: 'Invalid input. Click here to fix this.', callback: { fn: () => alert('Toast clicked!'), label: 'Go to place to fix this' },
      }
      toasts.push(newToast)
      store.set({ toasts })
    }
    return (
      <div id="story-root">
        <State store={store}>
          <ToastCenter toasts={store.get('toasts')} toastRemovalFn={removeToast} />
          <button onClick={addToast}>New Toast</button>
        </State>
      </div>
    )
  })
