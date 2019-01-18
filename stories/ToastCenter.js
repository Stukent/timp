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
        type: 'success', icon: 'trash', message: 'Success! Your request was processed.', id: 0,
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
        type: 'success', icon: 'trash', message: 'Success! Your request was processed.', id: toasts.length + 1,
      }
      toasts.push(newToast)
      store.set({ toasts })
    }
    return (
      <State store={store}>
        <ToastCenter toasts={store.get('toasts')} toastRemovalFn={removeToast} />
        <button onClick={addToast}>New Toast</button>
      </State>
    )
  })
  .addWithJSX('with a danger toast', () => {
    const store = new Store({
      toasts: [{
        type: 'danger', icon: 'trash', message: 'Request failed. Server responded with error: 404 - Not Found', id: 1,
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
        type: 'danger', icon: 'trash', message: 'Request failed. Server responded with error: 404 - Not Found', id: toasts.length + 1,
      }
      toasts.push(newToast)
      store.set({ toasts })
    }
    return (
      <State store={store}>
        <ToastCenter toasts={store.get('toasts')} toastRemovalFn={removeToast} />
        <button onClick={addToast}>New Toast</button>
      </State>
    )
  })
  .addWithJSX('with toast with a callback', () => {
    const store = new Store({
      toasts: [{
        id: 1, type: 'success', icon: 'trash', message: 'Invalid input. Click here to fix this.', callback: { fn: () => alert('Toast clicked!'), label: 'Fix me' },
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
        id: toasts.length + 1, type: 'success', icon: 'trash', message: 'Invalid input. Click here to fix this.', callback: { fn: () => alert('Toast clicked!'), label: 'Fix me' },
      }
      toasts.push(newToast)
      store.set({ toasts })
    }
    return (
      <State store={store}>
        <ToastCenter toasts={store.get('toasts')} toastRemovalFn={removeToast} />
        <button onClick={addToast}>New Toast</button>
      </State>
    )
  })
