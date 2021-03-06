# mini-vue

> 用于学习和理解 Vue 响应式原理

## 测试代码

```js
// example/index.js
const Vue = require('../src/mini-vue')

var vm = new Vue({
  data: {
    a: 2,
    b: 3
  },
  computed: {
    aa() {
      return this.a * this.a
    },
    ab() {
      return this.a + this.b
    }
  },
  created() {
    this.changeValue(11, 22)
  },
  methods: {
    changeValue(a, b) {
      if (a !== null && a !== undefined) {
        console.log(`|--- Before change data a to ${a} ---|`)
        this.a = a
        console.log(`|--- After change data a to ${a} ---|`)
      }
      if (b !== null && b !== undefined) {
        console.log(`|--- Before change data b to ${b} ---|`)
        this.b = b
        console.log(`|--- After change data b to ${b} ---|`)
      }
    }
  }
})
```
## 运行测试代码

```bash
npm test

# 更新计算属性: 'aa: 4'.
# 更新计算属性: 'ab: 5'.
# 更新视图(data): 'a: 2'.
# 更新视图(data): 'b: 3'.
# 更新视图(computed): 'aa: 4'.
# 更新视图(computed): 'ab: 5'.
# |--- Before change data a to 11 ---|
# 更新计算属性: 'aa: 121'.
# 更新计算属性: 'ab: 14'.
# 更新视图(data): 'a: 11'.
# 更新视图(computed): 'aa: 121'.
# 更新视图(computed): 'ab: 14'.
# |--- After change data a to 11 ---|
# |--- Before change data b to 22 ---|
# 更新计算属性: 'ab: 33'.
# 更新视图(data): 'b: 22'.
# 更新视图(computed): 'ab: 33'.
# |--- After change data b to 22 ---|
```
