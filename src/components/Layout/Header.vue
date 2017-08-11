<template>
    <header class="header text-center">
        <ul class="list-unstyled clearfix col-xs-10">
            <li v-for="item in items">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
        <p class="col-xs-2">user: {{$store.state.currentUser.email}}</p>
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
//      console.log(this.$router.options.routes)
    }
  }
</script>