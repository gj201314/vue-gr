import {INCREMENT,DECREMENT} from './types'
import getters from './getters'

const state = {
  count:1
};

const mutations = {
  [INCREMENT](state){
    state.count++;
  },
  [DECREMENT](state){
    state.count--;
  }
};

export default{
  state,
  mutations,
  getters
}