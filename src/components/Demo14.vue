<template>
    <div class="component">
        <div class="container">
            <div class="row">
                {{ref}}
                <div ref="aaa">111</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        ref: {}
      }
    },
    mounted: function () {
      this.ref = this.$refs.aaa.innerHTML
    }
  }
</script>


