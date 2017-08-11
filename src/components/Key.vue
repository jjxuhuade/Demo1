<template>
    <div class="component">
        <div class="container">
            <div class="row" v-if="loginType === 'username'">
                <label>Username</label>
                <input placeholder="Enter your username" key="username">
            </div>
            <div class="row" v-else>
                <label>Email</label>
                <input placeholder="Enter your email address" key="email">
            </div>
            <button @click="toggle">Toggle Login Type</button>
        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        loginType: 'username'
      }
    },
    methods: {
      toggle: function () {
        if (this.loginType === 'username') {
          this.loginType = false
        } else {
          this.loginType = 'username'
        }
      }
    }
  }

</script>


