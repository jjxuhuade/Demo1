import Vue from 'vue'

Vue.component('my-component', {
  props: ['message'],
  template: `<li>{{message}}</li>`
})

Vue.component('my-counter', {
  template: `<button @click="add">{{counter}}</button>`,
  data: function () {
    return {
      counter: 1
    }
  },
  methods: {
    add: function () {
      this.counter ++
      this.$emit('increment')
    }
  }
})
