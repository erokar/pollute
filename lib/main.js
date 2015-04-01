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


//   var i, key, len, results, results1, value;
//   if (includeFunctions == null) {
//     includeFunctions = null;
//   }
//   if (includeFunctions) {
//     results = [];
//     for (i = 0, len = includeFunctions.length; i < len; i++) {
//       key = includeFunctions[i];
//       global[key] = library[key];
//     }
//     return results;
//   } else {
//     results1 = [];
//     for (key in library) {
//       value = library[key];
//       global[key] = value;
//     }
//     return results1;
//   }
// };
