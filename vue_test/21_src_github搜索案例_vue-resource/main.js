// 引入vue
import Vue from "vue"
// 引入App
import App from './App.vue'
// 引入VueResource插件
import VueResource from "vue-resource"
// 关闭vue的生产提示
Vue.config.productionTip = false
// 使用VueResource插件
Vue.use(VueResource)

// 创建vm
new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount('#app')