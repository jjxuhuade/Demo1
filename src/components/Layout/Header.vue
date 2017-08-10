<template>
    <header class="header text-center">
        <ul class="list-unstyled clearfix" >
            <li v-for="item in items"><router-link :to="item.path">{{item.name}}</router-link> </li>
        </ul>
    </header>
</template>
<script>
    export default {
      data () {
        return {
          items: this.getRoutes()
        }
      },
      methods: {
        getRoutes () {
          return this.$router.options.routes
        }
      },
      mounted () {
        console.log(this.$router.options.routes)
      }
    }
</script>