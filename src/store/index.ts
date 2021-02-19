import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { Hobby } from '../types/types';

Vue.use(Vuex);

interface State {
  myHobbies: Hobby[];
  friendHobbies: Hobby[];
}

export default new Vuex.Store({
  state: {
    myHobbies: [
      {
        id: uuidv4(),
        name: 'Хоккей',
      },
      {
        id: uuidv4(),
        name: 'Высокоточная вёрстка под старые версии Microsoft Internet Explorer, начиная с версии 5.01',
      },
    ],
    friendHobbies: [
      {
        id: uuidv4(),
        name: 'Баскетбол',
        isAdded: false,
      },
      {
        id: uuidv4(),
        name: 'Нарезка Photoshop/Fireworks макетов на скорость, в экстримальных условиях, на природе',
        isAdded: false,
      },
    ],
  },
  mutations: {
    addHobby(state: State, hobby: Hobby): void {
      state.myHobbies.push(hobby);
    },
    removeHobby(state: State, hobby: Hobby): void {
      state.myHobbies = state.myHobbies.filter((item) => item.id !== hobby.id);
    },
  },
  getters: {
    myHobbies(state: State): Hobby[] {
      return state.myHobbies;
    },
    friendHobbies(state: State): Hobby[] {
      return state.friendHobbies;
    },
  },
  actions: {
    addHobbyToMyHobbies({ commit }, hobby: Hobby): void {
      const isHobbyAlreadyAdded = this.state.myHobbies.some((item) => item.id === hobby.id);

      if (!isHobbyAlreadyAdded) {
        const item = { ...hobby, isAdded: true };
        commit('addHobby', item);
      } else {
        alert('Данное хобби уже было добавлено в ваши увлечения');
      }
    },
    removeHobbyFromMyHobbies({ commit }, hobby: Hobby): void {
      commit('removeHobby', hobby);
    },
    addNewHobby({ commit }, hobbyName: string): void {
      const item = { id: uuidv4(), name: hobbyName };
      commit('addHobby', item);
    },
  },
});
