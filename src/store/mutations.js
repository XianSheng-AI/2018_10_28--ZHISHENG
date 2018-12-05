import Vue from 'vue'
import {LOGIN,LOGOUT} from './mutation_type'

export default {
  //{token},也可不写大括号
  //第一种写法
  [LOGIN]:(states,data)=>{
    localStorage.token = data;
    states.token=data;
    console.log(localStorage.token)
  },
  //第二种写法
  // [LOGIN](states,{token}){
  //   states.token=token;
  // }
  [LOGOUT]: (states) => {
    localStorage.removeItem('token');
    states.token = null
  },
}
