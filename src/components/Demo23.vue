<template>
	<div class="component demo23">
		<div class="container">
			<div class="row">
				<div style="width:100%;height:1000px;background: #ccc;">在导航完成前获取数据</div>
				<ul>
					<li>
						<router-link to="/demo23/6">/demo23/6</router-link>
					</li>
					<li>
						<router-link to="/demo23/5">/demo23/5</router-link>
					</li>
					<li>
						<router-link to="/demo23/4">/demo23/4</router-link>
					</li>
					<li>params:{{$route.params.id}}</li>
				</ul>

				<div v-if="error" class="error">
					{{ error }}
				</div>

				<div v-if="user" class="content">
					{{user}}
				</div>

				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data: function () {
      return {
        error: null,
        user: null
      }
    },
    beforeRouteEnter: function (to, from, next) {
      window.api.post('Vue', {id: to.params.id}).then(response => {
        if (response.status === 200 && response.data.status === true) {
          next(vm => {
            vm.user = response.data.items
          })
        } else {
          next(false)
        }
      }).catch(error => alert(error))
    },
    watch: {
      '$route': function () {
        this.user = null
        window.api.post('Vue', {id: this.$route.params.id}).then(response => {
          if (response.status === 200 && response.data.status === true) {
            this.user = response.data.items
            console.log(this)
          }
        }).catch(error => alert(error))
      }
    }
  }
</script>

<style>
.main-content{
	overflow: auto;
}
</style>
