<template>
    <div class="component">
        <div class="container">
            <div class="row">
                http://localhost:8080/demo18/18?name=xuhuade&age=22<br/>

                params:{{ $route.params.id }}<br/>

                query: {{$route.query}}
            </div>
        </div>
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
    }
  }
</script>


