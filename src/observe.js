const { Dep } = require('./dep')

function Observe(value) {
  if (!(this instanceof Observe)) {
    throw Error('请用 new 操作符初始化对象')
  }
  this.defineReactive(value)
}

Observe.prototype.defineReactive = function(obj) {
  Object.keys(obj).forEach((property) => {
    var dep = new Dep()
    var val = obj[property]
    Object.defineProperty(obj, property, {
      enumerable: true,
      configurable: true,
      get: function() {
        if(Dep.target) {
          dep.depend()
        }
        return val
      },
      set: function(newVal) {
        if (obj[property] == newVal) {
          return
        }
        val = newVal
        dep.notify()
      }
    })
  })
}

function observe(value) {
  return new Observe(value)
}

module.exports = {
  Observe,
  observe
}
