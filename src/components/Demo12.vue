<template>
    <div class="component">
        <div class="container">
            <div class="row">
                <li-componnet/>
                {{name1}}
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        name1: '111'
      }
    },
    methods: {
    },
    mounted: function () {
      this.name1 = '222'
    }
  }
</script>


