<template>
    <div class="component">
        <div class="container">
            <div class="row">
                demo16
                <jj-test></jj-test>
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
    },
    components: {
      jjTest: () => import('./Layout/test.vue')
    }
  }
</script>


