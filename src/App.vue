<template>
    <div id="app">
        <jjHeader>header</jjHeader>
        <div class="main-content" :style="styleObject">
            <router-view></router-view>
        </div>
        <jjFooter>footer</jjFooter>
    </div>
</template>

<script>
  import jjHeader from './components/Layout/Header.vue'
  import jjFooter from './components/Layout/Footer.vue'

  export default {
    name: 'app',

    data () {
      return {
        styleObject: {
          height: this.height()
        }
      }
    },

    methods: {
      height () {
        return ($(document).height() - 100) + 'px'
      }
    },

    components: {
      jjHeader,
      jjFooter
    }
  }
</script>


