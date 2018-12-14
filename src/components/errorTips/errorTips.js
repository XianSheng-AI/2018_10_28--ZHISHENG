
import errorTips from './errorTips.vue'

const Error = {};
Error.install = function (Vue) {
  // 生成一个Vue的子类
  // 同时这个子类也就是组件
  const ErrorConstructor = Vue.extend(errorTips)
  // 生成一个该子类的实例
  const instance = new ErrorConstructor();
  // 将这个实例挂载在我创建的div上
  // 并将此div加入全局挂载点内部
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法
  Vue.prototype.$error=(msg,bgColor='#F43A0C',duration=2000)=>{
     instance.tips = msg;
     instance.bg_color = bgColor;
     instance.isvisible=true;
    setTimeout(()=>{
      instance.isvisible=false;
    },duration)
  }
}
export default Error;
