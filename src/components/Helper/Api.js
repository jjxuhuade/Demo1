const Api = {
	data(){
		return {
			api: {
				get(url, params){
					return new Promise ((resolve, reject) => {
						axios.get (url, {params: params})
							.then (response => resolve (response))
							.catch (response => reject (response))
					})
				},
				post(url, params){
					nprogress.start ();
					return new Promise ((resolve, reject) => {
						axios.post (url, params)
							.then (response => {
								if (response.status === 200 && response.data.status === false && response.data.islogin === false) {
									cookies.remove ('user');
									cookies.remove ('session_id');
									store.dispatch ('setCurrentUser', {})
									lockr.flush ()
									router.push ('/')
								} else {
									resolve (response)
								}
								nprogress.done ()
								
							})
							.catch (response => {
								nprogress.done ()
								reject (response)
							});
					});
				},
				resetCommonData(data) {
					lockr.set ('user', data.user)
					lockr.set ('session_id', data.session_id)
					axios.defaults.headers.session_id = data.session_id
					lockr.set ('time', data.time)
					var gc_maxlifetime = data.gc_maxlifetime ? data.gc_maxlifetime : 1800
					var date           = new Date ()
					date.setTime (date.getTime () + 1800 * 1000)
					cookies.set ('user', data.user, {expires: date})
					cookies.set ('session_id', data.session_id, {expires: date})
					store.dispatch ('setCurrentUser', data.user)
					router.push ('/list')
					
				},
			},
			
			excludesRoute: ['home']
		}
	},
	
	methods: {},
	
	watch: {
		'$route'(to, from){
			//this.$router.push('/list')
			this.params = this.$route.params;
		}
	},
	
	created(){
		console.log ('api');
	}
	
}


export default Api;