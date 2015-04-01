module.exports.pollute = function(library, includeFunctions) {
  if (includeFunctions) {
    includeFunctions.forEach(function(functionName, index) {
      global[functionName] = library[functionName];
    });
  } else {
    for (var key in library) {
      global[key] = library[key];
    }
  }
};
