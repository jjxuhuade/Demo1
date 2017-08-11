<template>
    <div class="component">
        <div class="container">
            <div class="row">
                <ul class="list-unstyled">
                    <li v-for="user in users">{{user.email | capitalize}}</li>
                </ul>
                <button @click="push()">add</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        users: this.getUsers()
      }
    },
    methods: {
      getUsers: function () {
        window.api.post('Vue/index').then(response => {
          this.users = response.data.items
        })
      },
      push: function () {
        this.users.push({email: '新加的'})
      }
    }

  }
</script>
