# ajc-babel-config
Work in progress (06/07/2021)

An easy to import and use [`babel`](https://babeljs.io/docs/en/) configuration module designed for use with ReactJs applications.

# Installation

Add the following entry to the `dependencies` or `devDependencies` section of your projects `package.json` file:

```
"ajc-babel-config": "github:ajc24/ajc-babel-config"
```

---

# Add the Babel Configuration File

Create a `babel.config.js` file at the root of your project workspace.

Add the following content to the file:

```javascript
const { configureBabel } = require('ajc-babel-config');

module.exports = configureBabel;
```
