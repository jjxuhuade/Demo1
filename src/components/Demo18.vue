<template>
    <div class="component">
        <div class="container">
            <div class="row">

                <router-link to="/demo18/18?name=xuhuade&age=22">http://localhost:8080/demo18/18?name=xuhuade&age=22</router-link><br/>
                <ul>
                    <li><router-link :to="{ name: 'demo18', params: { id: 123 }, query: {name: 'user02'}}">:to="{ name: 'demo18', params: { id: 123 }, query: {name: 'user02'}}"</router-link></li>
                    <li><button @click="go1">字符串：this.$router.push('/demo18/19?name=jack&age=33')</button></li>
                    <li><button @click="go2">对象： this.$router.push({path: '/demo18/1?name=user01&age=01'})</button></li>
                    <li><button @click="go3">路由名称</button></li>
                    <li><button @click="go4">路由名称及参数</button></li>
                    <li><button @click="go5">replace</button></li>
                </ul>

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
      go1: function () {
        this.$router.push('/demo18/19?name=jack&age=33')
      },
      go2: function () {
        this.$router.push({path: '/demo18/1?name=user01&age=01'})
      },
      go3: function () {
        this.$router.push({
          name: 'demo18',
          params: {
            id: 55
          }
        })
      },
      go4: function () {
        this.$router.push({
          name: 'demo18',
          params: {
            id: 55
          },
          query: {
            name: 'user02',
            age: '22'
          }
        })
      },
      go5: function () {
        this.$router.replace({
          name: 'demo18',
          params: {
            id: 66
          },
          query: {
            name: 'replace'
          }
        })
      }
    },
    mounted: function () {
    }
  }
</script>


