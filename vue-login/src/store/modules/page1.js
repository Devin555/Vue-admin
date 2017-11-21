/**
 * Created by F1333553 on 2017/11/9.
 */
import types from '../types.js'
import axios from 'axios'

const state = {
   name: '',
   email: '',
   count: 666
};
const getters = {
   name(state){
      return state.name
   },
   email(state){
      return state.email
   },
   count(state){
      return state.count
   }
};
const actions = {
   get({commit, state}){
      axios({
         method: 'get',
         url: '/api/users',
         data: {}
      }).then(function (res) {
         commit(types.LOGIN_SATE, res.data.data);
      }).catch(function (err) {
         alert('失败')
      })
   }
};
const mutations = {
   [types.LOGIN_SATE](state, data){
      state.user = data;
   }
};
export default {
   state,
   getters,
   actions,
   mutations
}
