# deduplicate

A [Node.js](https://nodejs.org/) module that removes duplicate array elements or string characters.

## Installation

```bash
npm install deduplicate --save
```

The module exposes a single function.

## Usage

```javascript
const deduplicate = require('deduplicate')
deduplicate([1, 1, 1]) // [1]
deduplicate('aaa') // 'a'
```
