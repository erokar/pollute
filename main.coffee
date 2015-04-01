module.exports = pollute = (library, includeFunctions = null) ->
  if includeFunctions
    @[key] = library[key] for key in includeFunctions
  else
    @[key] = value for key, value of library
