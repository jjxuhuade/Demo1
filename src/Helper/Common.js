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
      this.counter++
      this.$emit('increment')
    }
  }
})

Vue.component('currency-input', {
  template: `
    <span>
      $<input
        ref="input"
        @input="updateValue($event.target.value)"
      >
    </span>
  `,
  methods: {
    updateValue: function (value) {
      var formattedValue = value.toUpperCase()
      this.$refs.input.value = formattedValue
    }
  }
})

Vue.component('my-checkbox', {
  template: `
        <input type="checkbox" @change=""/>
  `,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    value: String
  },
  methods: {}
})

Vue.component('my-component', {
  template: `
      <div>
        <h2>我是子组件的标题</h2>
        <slot>
          只有在没有要分发的内容时才会显示。
        </slot>
      </div>
  `
})

Vue.component('jj_layout', {
  render: function (createElement) {
    var header = createElement('header', {
      class: ['header'],
      style: {
        width: '100%',
        border: '1px solid #ccc',
        textAlign: 'center'
      },
      attrs: {
        title: 'customer layout'
      },
      // on: {
      //   click: function (e) {
      //     console.log(e.target)
      //   }
      // },
      // 仅对于组件，用于监听原生事件，而不是组件内部使用 `vm.$emit` 触发的事件。
      nativeOn: {
        click: function (e) {
          console.log(222)
        }
      }
    }, this.$slots.header)
    var footer = createElement('footer', {
      class: ['footer'],
      style: {
        width: '100%',
        border: '1px solid #ccc',
        textAlign: 'center'
      }
    }, this.$slots.footer)
    var body = createElement('div', {
      class: ['main-content']
    }, this.$slots.default)
    var layer = []
    var excludes = ['home']
    if (_.indexOf(excludes, window.router.currentRoute.name) === -1) {
      layer.push(header)
    }
    layer.push(body)
    if (_.indexOf(excludes, window.router.currentRoute.name) === -1) {
      layer.push(footer)
    }
    return createElement('div',
      {},
      layer
    )
  }
})

Vue.component('jj_layout1', {
  template: `
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `
})

Vue.component('child-component4', {
  template: `
    <ul>
        <slot name="child-ul" v-for="item in fruit" :text="item.name" />
    </ul>
  `,
  data: function () {
    return {
      fruit: [
        {name: '苹果'},
        {name: '香蕉'},
        {name: '橙子'}
      ]
    }
  }
})

Vue.component('father-component4', {
  template: `
     <child-component4>
     <template scope="props" slot="child-ul">
        <li class="child-li" >{{props.text}}</li>
     </template>
    </child-component4>
  `
})

Vue.component('ul-component', {
  template: `<ul>
     <slot name="child-li" v-for="item in items"  :text="item"/>
  </ul>`,
  data: function () {
    return {
      items: ['user01', 'user02', 'user03']
    }
  }
})

Vue.component('li-componnet', {
  template: `
    <ul-component>
       <template scope="props" slot="child-li">
        <li class="child-li" >{{props.text}}</li>
       </template>
    </ul-component>
  `
})

Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
