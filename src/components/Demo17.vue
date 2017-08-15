<template>
    <div class="component">
        <div class="container">
            <div class="row">
                {{message}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        message: '1111'
      }
    },
    methods: {
      update: function () {
        this.message = 2222
        console.log(this.$el.textContent) // => '没有更新'
        this.$nextTick(function () {
          console.log(this.$el.textContent) // => '更新完成'
        })
      }
    },
    mounted: function () {
      this.update()
    }
  }
</script>


