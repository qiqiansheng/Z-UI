import input from './src'

input.install = function(Vue){
  Vue.component(input.name,input)
}


export default input