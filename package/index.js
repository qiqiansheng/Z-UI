import Button from './Button'
import Tooltip from './Tooltip'
import Input from './Input'
import Message from './Message'
// Message()
const components = [
  Button,
  Tooltip,
  Input,
  Message
]

const install = function(Vue){
  components.map(component => {
    if(typeof component === 'function'){
      return
    }
    Vue.component(component.name,component)
  })
}

export default{
  install,
  Button,
  Tooltip,
  Input,
  Message
}

export {
  install,
  Button,
  Tooltip,
  Input,
  Message
}

