const getters = {
  fullName: state => {
    return state.currentUser.id + ' ' + state.currentUser.name
  }
}

export default getters
