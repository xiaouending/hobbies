import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { Hobby } from '../types/types';

Vue.use(Vuex);

interface State {
  myHobbies: Hobby[];
  friendHobbies: Hobby[];
}

const defaultState = () => ({
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
});

export default new Vuex.Store({
  state: defaultState(),
  mutations: {
    addHobby(state: State, hobby: Hobby): void {
      state.myHobbies.push(hobby);
    },
    removeHobby(state: State, hobby: Hobby): void {
      state.myHobbies = state.myHobbies.filter((item) => item.id !== hobby.id);
    },
    setState(state: State, payload: State): void {
      Object.assign(state, payload);
    },
    saveState(state: State): void {
      localStorage.setItem('hobbiesState', JSON.stringify(state));
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
        commit('saveState');
      } else {
        alert('Данное хобби уже было добавлено в ваши увлечения');
      }
    },
    removeHobbyFromMyHobbies({ commit }, hobby: Hobby): void {
      commit('removeHobby', hobby);
      commit('saveState');
    },
    addNewHobby({ commit }, hobbyName: string): void {
      const item = { id: uuidv4(), name: hobbyName };
      commit('addHobby', item);
      commit('saveState');
    },
    initializeState({ commit }): void {
      const storageState = localStorage.getItem('hobbiesState');

      if (!storageState) {
        commit('saveState');
      } else {
        commit('setState', JSON.parse(storageState));
      }
    },
  },
});
