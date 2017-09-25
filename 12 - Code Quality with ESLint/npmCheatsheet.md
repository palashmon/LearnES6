Packages have been updated since recording.

eslint-plugin-jsx-a11y version 5 is not compatible with rest of dependencies

### New Directions

Run this in terminal for correct version

``` bash
npm info "eslint-config-airbnb@latest" peerDependencies
```

Currently showing as of 09/25/2017
``` js
{
    eslint: '^3.19.0 || ^4.3.0',
    'eslint-plugin-jsx-a11y': '^5.1.1',
    'eslint-plugin-import': '^2.7.0',
    'eslint-plugin-react': '^7.1.0'
}
```

Run this instead:

``` bash
npm install -g eslint-config-airbnb eslint-plugin-jsx-a11y@^5.1.1 eslint-plugin-import eslint-plugin-react
```
