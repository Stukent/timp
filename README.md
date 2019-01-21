# timp
A library of React components


This is designed to be consumed by other Stukent projects.

You'll need to add to `package.json` a line like the folowing
`"timp": "https://s3.amazonaws.com/stukent-timp/timp.tar.gz"`


### Development

`npm run watch` will start a webpack watcher to keep the `dist/` folder build. `npm link` will not work, you'll need to symlink into
that `dist` folder.

### Storybook

`npm run storybook` will launch a local version of storybook