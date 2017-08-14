<template>
    <div id="app">
        <jjHeader></jjHeader>
        <div class="main-content" ref="maincontent" :style="styleObject">
            <router-view></router-view>
        </div>
        <jjFooter></jjFooter>
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
        return ($(document).height() - 200) + 'px'
      }
    },

    components: {
      jjHeader,
      jjFooter
    }
  }
</script>


