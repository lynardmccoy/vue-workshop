import Vue from 'vue'
import Cumulus from '@ipscape/cumulus';
import '@ipscape/cumulus/dist/cumulus.css';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Cumulus);

new Vue({
  render: h => h(App),
}).$mount('#app')
