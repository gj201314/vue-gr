import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
  count:1
}

const mutations = {
  increment(state){  //处理状态(数据)的变化
    state.count++;
  },
  decrement(){
    state.count--;
  }
}

const actions = {
  increment:({commit})=>{ //处理你要干什么(设置处理状态) commit专门提交给mutations
    commit('increment')
  },
  decrement:({commit,state})=>{
    if(state.count!=1){
      commit('decrement');
    }else{
      alert('最少为1')
    };
  }
}

const getters = {
  count(state){
    return state.count;
  }
}

//导出store对象
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})