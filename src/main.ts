 /* eslint-disable */
import Vue from 'vue'
import "./assets/styles/theme/ltr.scss"
import "./assets/styles/theme/rtl.scss"
import "./assets/styles/theme/light.scss"
import "./assets/styles/theme/dark.scss"

import './assets/tailwind.css'
import './assets/styles/app.scss'
import kuComponents from './components/export'

// @ts-ignore
 window.$ = window.jQuery = require('jquery');


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
