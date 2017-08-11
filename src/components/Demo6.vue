<template>
    <div class="component">
        <div class="container">
            <div class="row">
                <p>{{total}}</p>
                <my-counter v-on:increment="incrementTotal()"></my-counter>
                <my-counter v-on:increment="incrementTotal()"></my-counter>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        total: 0
      }
    },
    methods: {
      incrementTotal: function () {
        this.total++
      }
    }
  }
</script>


