function proxy(vm, src_property, key) {
  Object.defineProperty(vm, key, {
    configurable: true,
    enumerable: true,
    get: function() {
      return vm[src_property][key]
    },
    set: function(newVal) {
      vm[src_property][key] = newVal
    }
  })
}

module.exports = {
  proxy
}
