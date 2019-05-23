import Vue from 'vue'
import App from './App.vue'
import './assets/styles.less'

window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(even, callback) {
    this.vue.$on(even, callback);
  }

}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')