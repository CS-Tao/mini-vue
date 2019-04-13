let uid = 0

function Dep() {
  if (!(this instanceof Dep)) {
    console.error('请用 new 操作符初始化对象')
  }
  this.id = uid++
  this.subs = []
}

Dep.prototype.addSub = function(sub) {
  this.subs.push(sub)
}

Dep.prototype.removeSub = function() {
}

Dep.prototype.depend = function() {
  if (Dep.target) {
    Dep.target.addDep(this)
  }
}

Dep.prototype.notify = function() {
  this.subs.forEach((sub) => {
    sub.update()
  })
}

Dep.target = null

const targetStack = []

function pushTarget (_target) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}

function popTarget () {
  Dep.target = targetStack.pop()
}

module.exports = {
  pushTarget,
  popTarget,
  Dep
}
