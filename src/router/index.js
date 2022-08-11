import Vue from 'vue'
import Router from 'vue-router'
import DragAndDrop from '@/components/DragAndDrop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DragAndDrop',
      component: DragAndDrop
    }
  ]
})
