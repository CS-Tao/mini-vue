const { lifecycles } = require('./models')
const {
  resolveOptions,
  initLifecycle,
  initEvents,
  initRender,
  initState,
  callhook
} = require('./metheds')

function Vue(options) {
  if (!this instanceof Vue) {
    console.error('请用 new 操作符初始化对象')
  }
  this._init(options)
}

Vue.prototype._init = function(options) {
  const vm = this
  resolveOptions(vm, options)
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callhook(vm, lifecycles.beforeCreate)
  initState(vm)
  callhook(vm, lifecycles.created)
}

module.exports = Vue
