 /* eslint-disable */
import Vue from 'vue'
import './assets/tailwind.css'
import kuComponents from './components/export'
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]
export default {
  install (Vue: any, perfix:String) {
  if (!perfix) {
    perfix = 'ku-'
  }
  Object.entries(kuComponents).forEach( ([key, value])=>{
    Vue.component(perfix + key, value)
  })
  }
 }
 