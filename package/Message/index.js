import message from './src'
import Vue from 'vue'
const messageConstructor = Vue.extend(message)
const messageBoxList = []
const messageFun = function(options){
  options = options || {}
  if(typeof options === 'string'){
    options = {
      message:options
    }
  }
  const messageIncetance = new messageConstructor({data:options})
  messageIncetance.$mount()
  // messageIncetance.vm.$el.style.top = (messageBoxList.length - 1) * 62 + 20 + 'px'
  // messageBoxList.push(messageIncetance.dom)
  messageIncetance.visible = true
  document.body.appendChild(messageIncetance.$el)
  setTimeout(()=>{
    messageIncetance.visible = false
    // messageBoxList.shift(messageIncetance.dom)
  },options.duration?options.duration :3000)
}


export default messageFun