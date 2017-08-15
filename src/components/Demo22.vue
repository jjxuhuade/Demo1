<template>
	<div class="component">
		<div class="container">
			<div class="row">

				<ul>
					<li>导航完成后获取数据</li>
					<li><router-link to="/demo22/11">/demo22/11</router-link></li>
					<li><router-link to="/demo22/22">/demo22/22</router-link></li>
					<li>params:{{$route.params.id}}</li>
				</ul>
				{{user}}
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data: function () {
      return {
        user: {}
      }
    },
    methods: {
      fetch: function () {
        var id = this.$route.params.id
        if (id === '11') {
          this.user = {name: 'user11', email: 'user11@163.com'}
        }
        if (id === '22') {
          this.user = {name: 'user22', email: 'user22@163.com'}
        }
      }
    },
    created: function () {
      this.fetch()
    },
    watch: {
      '$route': 'fetch'
    }
  }
</script>


