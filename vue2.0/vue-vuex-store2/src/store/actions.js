//导出types里所有的变量
import * as types from './types'
console.log(types)
export default{
  increment:({commit,state})=>{
    commit(types.INCREMENT)
  },
  decrement:({commit,state})=>{
    if(state.mutations.count==1){
      alert('最少为1')
    }else{
      commit(types.DECREMENT)
    };
  }
}