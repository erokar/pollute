# climate-change
Include node libraries in global namespace.

## Installation

```javascript
npm install climate-change --save
```

## Example usage

```javascript
var climateChange = require('climate-change');
climateChange.pollute(_, ['min', 'max']);
min([1, 2, 3])
```

## climate-change.pollute(library, arrayOfFunctionNames)

Takes a variable pointing to a library and a optional array with strings of function
names to include in the global namespace.

```javascript
climateChange.pollute(_);
```

Will make all of underscore's functions available in the global namespace.

```javascript
climateChange.pollute(_, ['map', 'filter']);
```

Will make just the map and filter functions available in the global namespace.
