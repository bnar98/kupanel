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
  install(Vue, perfix) {

    Vue.filter('currencyFormat', function (value) {

      var formatter = new Intl.NumberFormat({
        minimumFractionDigits: 2
      });
      if (value) {
        value = value.toString();
        var pointPosition = value.indexOf(".");
        if (pointPosition >= 0) {
          return formatter.format(value) + value.slice(pointPosition, value.lenght);
        } else {
          return formatter.format(value);
        }
      }
      return 0

    });


    Vue.directive(
      'click-outside',
      require('./directives/ClickOutside').default
    );
    Vue.directive(
      'can',
      require('./directives/can').default
    );
    if (!perfix) {
      perfix = 'ku-'
    }
    Object.entries(kuComponents).forEach(([key, value]) => {
      Vue.component(perfix + key, value)
    })
  }
}
