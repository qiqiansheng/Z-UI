import tooltip from './src'

tooltip.install = function(Vue){
  Vue.component(tooltip.name,tooltip)
}


export default tooltip