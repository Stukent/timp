# timp
A library of React components


This is designed to be consumed by other Stukent projects.

You'll need to add to `package.json` a line like the folowing
`"timp": "git+ssh://git@github.com:Stukent/timp#<identifier>"`

Where `<identifier>` is a commit, branch, or tag.
Make sure the importing project is set up to transpile this code for ES6 and JSX


### Development

`npm run watch` will start a webpack watcher to keep the `dist/` folder build. `npm link` will not work, you'll need to symlink into
that `dist` folder.