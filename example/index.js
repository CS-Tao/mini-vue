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
    console.log('Created hook called')
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
