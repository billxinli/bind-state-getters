module.exports = function (getters, state) {
  var resolvedGetters = {}
  Object.keys(getters).forEach(function(getter){
    resolvedGetters[ getter ] = getters[ getter ](state)
  })
  return resolvedGetters
}

