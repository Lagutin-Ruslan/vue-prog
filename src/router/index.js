import Vue from 'vue'
import VueRouter from 'vue-router'
import offer from '../components/offer.vue'
import statistics from '../components/statistics.vue'
import contacts from '../components/contacts.vue'

Vue.use(VueRouter)

export default new VueRouter ({
  
  routes: [
    {
      path: '/offer',
      component: offer
    },
    {
      path: '/statistics',
      component: statistics
    },
    {
      path: '/contacts',
      component: contacts
    }
  ],
  mode: 'history'
})