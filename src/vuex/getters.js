const getters = {
  fullName: state => {
    return state.currentUser.firstName + ' ' + state.currentUser.lastName
  }
}

export default getters
