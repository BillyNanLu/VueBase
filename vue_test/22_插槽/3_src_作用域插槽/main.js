// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入vueResource插件
import vueResource from 'vue-resource'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 使用vueResource插件
Vue.use(vueResource)

//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})