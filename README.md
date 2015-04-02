# climate-change
Include node libraries in global namespace.

## Installation

```javascript
npm install climate-change --save


## Example usage

```javascript
var climate-change = require('climate-change');
climate-change.pollute(_, ['min', 'max']);
min([1, 2, 3])

## climate-change.pollute(library, arrayOfFunctionNames)

Takes a variable pointing to a library and a optional array with strings of function
names to include in the global namespace.

```javascript
climate-change.pollute(_);

Will make all of underscore's functions available in the global namespace.

```javascript
climate-change.pollute(_, ['map', 'filter']);

Will make just the map and filter functions available in the global namespace. 
