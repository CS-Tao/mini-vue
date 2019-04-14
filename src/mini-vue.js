const {
  lifecycles
} = require('./lifecycles')

const {
  resolveOptions,
  initLifecycle,
  initEvents,
  initRender,
  initState,
  callhook
} = require('./inits')

function Vue(options) {
  if (!(this instanceof Vue)) {
    throw Error('请用 new 操作符初始化对象')
  }
  this._init(options)
}

Vue.prototype._init = function(options) {
  const vm = this
  this._isVue = true
  resolveOptions(vm, options)
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callhook(vm, lifecycles.beforeCreate)
  initState(vm)
  callhook(vm, lifecycles.created)
}

module.exports = Vue
