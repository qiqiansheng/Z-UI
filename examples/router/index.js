import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import ButtonDoc from '../docs/ButtonDoc.vue'
import InputDoc from '../docs/InputDoc.vue'
import TooltipDoc from '../docs/TooltipDoc.vue'
import MessageDoc from '../docs/MessageDoc.vue'
import QuickUseDoc from '../docs/QuickUseDoc.vue'
import InstallDoc from '../docs/InstallDoc.vue'
import UseRuleDoc from '../docs/UseRuleDoc.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Doc',
    component: Doc,
    redirect: '/Doc/InstallDoc',
    children: [
    {
      path: 'ButtonDoc',
      component: ButtonDoc
    },
    {
      path: 'InputDoc',
      component: InputDoc
    },
    {
      path: 'TooltipDoc',
      component: TooltipDoc
    },
    {
      path: 'MessageDoc',
      component: MessageDoc
    },
    {
      path: 'InstallDoc',
      component: InstallDoc
    },
    {
      path: 'QuickUseDoc',
      component: QuickUseDoc
    },
    {
      path: 'UseRuleDoc',
      component: UseRuleDoc
    },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router