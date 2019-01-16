# <Toast />

## Prerequisites
- `Toast` components must be used in combination with the `ToastCenter` component.

## Props
Props are passed in a nexted `toast` object. The keys are below.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| type | `string` | ` ` | Specify the type of toast. Valid options are `success`, `warning`, and `danger`. |
| icon | `string` | ` ` | Specify the icon for the toast. Default icons are determined by `type` |
| message | `string` | ` ` | Specify the message displayed on the toast. |
| callback | `object` | ` ` | (optional) A callback to fire when the toast is clicked. Takes two valid keys - `fn`: function to call; `label`: display for the clickable area |