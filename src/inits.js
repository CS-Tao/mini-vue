
const { observe } = require('./observe')
const { Watcher } = require('./watcher')
const { proxy } = require('./proxy')

function resolveOptions(vm, options) {
  vm.$options = options
  vm._data = options.data || {}
  vm._computed = options.computed || {}
  vm._methods = options.methods || {}
  vm._watch = options.watch || {}
}

function initLifecycle(vm) {

}

function callhook(vm, hook) {
  if (vm.$options[hook] && Object.prototype.toString.call(vm.$options[hook]) === '[object Function]') {
    vm.$options[hook].call(vm)
  }
}

function initEvents(vm) {

}

function initRender(vm) {

}

function initState(vm) {
  proxyVue(vm)
  observe(vm._data)
  Object.keys(vm._computed).forEach((key) => {
    new Watcher(vm, () => {
      console.log(`更新计算属性: '${key}': ${vm._computed[key].call(vm)}'.`)
    })
  })
  Object.keys(vm._data).forEach((key) => {
    new Watcher(vm, () => {
      console.log(`更新视图(data): '${key}': ${vm._data[key]}'.`)
    })
  })
  Object.keys(vm._computed).forEach((key) => {
    new Watcher(vm, () => {
      console.log(`更新视图(computed): '${key}': ${vm._computed[key].call(vm)}'.`)
    })
  })
}

function proxyVue(vm) {
  var src_properties = ['_data', '_methods']
  src_properties.forEach(property => {
    Object.keys(vm[property]).forEach(key => {
      proxy(vm, property, key)
    })
  })
  Object.keys(vm._computed).forEach(key => {
    var val = vm._computed[key]
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      get: function() {
        return val
      },
      set: function() {
        throw Error('不能修改计算属性的值')
      }
    })
  })
}

module.exports = {
  resolveOptions,
  initLifecycle,
  callhook,
  initEvents,
  initRender,
  initState
}
