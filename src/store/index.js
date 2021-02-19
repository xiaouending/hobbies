import { store } from './store'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    myHobbies: [
      'Хоккей',
      'Высокоточная вёрстка под старые версии Microsoft Internet Explorer, начиная с версии 5.01'
    ],
    friendHobbies: [
      'Баскетбол',
      'Нарезка Photoshop/Fireworks макетов на скорость, в экстримальных условиях, на природе'
    ]
  },
  mutations: {
    addMyHobbie (state, hobbie) {
      state.myHobbies.push(hobbie)
    },
    removeMyHobbie (state, hobbie) {
      state.myHobbies = state.myHobbies.filter(item => item !== hobbie)
    }
  },
  getters: {
    getMyHobbies (state) {
      return state.mYobbies
    },
    getFriendHobbies (state) {
      return state.friendHobbies
    }
  }
})