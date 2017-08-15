<template>
    <div class="component">
        我是child组件
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
      }
    },
    methods: {
    },
    mounted: function () {
      console.log('mounted')
    },
    watch: {
      '$route': function (to, from) {
        console.log(to)
      }
    }
  }
</script>


