const Api = {
  data: function () {
    return {
      api: {
        get: function (url, params) {
          return new Promise((resolve, reject) => {
            axios.get(url, {params: params})
              .then(response => resolve(response))
              .catch(response => reject(response))
          })
        },
        post: function (url, params) {
          window.nprogress.start()
          return new Promise((resolve, reject) => {
            axios.post(url, params)
              .then(response => {
                if (response.status === 200 && response.data.status === false && response.data.islogin === false) {
                  cookies.remove('user')
                  cookies.remove('session_id')
                  window.store.dispatch('setCurrentUser', {})
                  lockr.flush()
                  window.router.push('/')
                } else {
                  resolve(response)
                }
                window.nprogress.done()
              })
              .catch(response => {
                window.nprogress.done()
                reject(response)
              })
          })
        },
        resetCommonData: function (data) {
          lockr.set('user', data.user)
          lockr.set('session_id', data.session_id)
          axios.defaults.headers.session_id = data.session_id
          lockr.set('time', data.time)
          var date = new Date()
          date.setTime(date.getTime() + 1800 * 1000)
          cookies.set('user', data.user, {expires: date})
          cookies.set('session_id', data.session_id, {expires: date})
          window.store.dispatch('setCurrentUser', data.user)
          window.router.push('/list')
        }
      },
      excludesRoute: ['home']
    }
  },
  methods: {},
  watch: {
    '$route' (to, from) {
      this.params = this.$route.params
    }
  },
  mounted: function () {
    console.log('mounted')
  },
  created: function () {
    console.log('created')
  }
}

export default Api
