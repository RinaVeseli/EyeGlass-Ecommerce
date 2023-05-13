import { createStore } from 'vuex';
// /import axios from 'axios';

const store = createStore({
  state: {
    users: [],
    eyeglasses: [],
    contacts: [],
    user: null,
  },
  mutations: {
    setEyeglasses(state, eyeglasses) {
      state.eyeglasses = eyeglasses;
    },
    setContacts(state, contacts) {
      state.contacts = contacts;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user){
      state.user = user;
    }
  },
  actions: {
    async fetchEyeglasses({ commit }) {
      try {
        const res = await fetch(
          'http://localhost:3000/api/v1/eyeGlasses'
        );
        const eyeglasses = await res.json();
        commit('setEyeglasses', eyeglasses.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchContacts({ commit }) {
      try {
        const res = await fetch(
          'http://localhost:3000/api/v1/contacts'
        );
        const contacts = await res.json();
        commit('setContacts', contacts.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUsers({ commit }) {
      try {
        const res = await fetch(
          'http://localhost:3000/api/v1/users/allusers'
        );
        const users = await res.json();
        commit('setUsers', users);
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    numberOfEyeglasses(state) {
      return state.eyeglasses.length;
    },
    numberOfContacts(state) {
      return state.contacts.length;
    },
    numberOfUsers(state) {
      return state.users.length;
    },
    getUser(state){
      return state.user;
    }
  },
});

export default store;
