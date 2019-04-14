const { pushTarget, popTarget } = require('./dep')

function Watcher(vm, func) {
  if (!(this instanceof Watcher)) {
    throw Error('请用 new 操作符初始化对象')
  }
  this.vm = vm
  this.deps = []
  this.depIds = new Set()
  this.getter = func
  if (!this.getter || typeof this.getter !== 'function') {
    throw Error('Watcher 构造错误')
  }
  this.value = this.get()
}

Watcher.prototype.get = function() {
  pushTarget(this)
  let value = this.getter.call(this.vm, this.vm)
  popTarget()
  this.cleanupDeps()
  return value
}

Watcher.prototype.addDep = function(dep) {
  const id = dep.id
  if (!this.depIds.has(id)) {
    this.deps.push(dep)
    this.depIds.add(id)
    dep.addSub(this)
  }
}

Watcher.prototype.cleanupDeps = function(dep) {
  this.deps.length = 0
}

Watcher.prototype.update = function() {
  this.get()
}

module.exports = {
  Watcher
}
