import Vue from 'vue'
import App from './App.vue'
// import Ninjas from './Ninjas.vue'

// Event bus below
export const bus = new Vue();

// making the below component available globally
// Vue.component('ninja-team', Ninjas);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
