// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入vueResource插件
import VueResource from 'vue-resource'
// 引入store
import store from './store'

// 关闭Vue生产提示
Vue.config.productionTip = false
// 使用vueResource插件
Vue.use(VueResource)

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})