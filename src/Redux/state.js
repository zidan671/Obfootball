let store = {
  _state: {
    tournamentsPage: {
      teamsName : [
        {id:1, name: 'Spartak'},
        {id:2, name: 'CSKA'},
        {id:3, name: 'Dinamo'},
        {id:4, name: 'Zenit'},
        {id:5, name: 'Rubin'},
      ]
    },
    playersPage: {
    
    },
    statisticsPage: {

    },

    galeryPage : {

    }

  },

  _callSubscriber() {
    console.log('State is change')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },


}

export default store
