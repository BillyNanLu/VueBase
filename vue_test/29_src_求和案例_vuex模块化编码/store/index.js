// 改文件用于创建vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入求和相关的配置
import countOptions from './count'
// 引入人员相关的配置
import personOptions from './person'
// 应用Vuex插件
Vue.use(Vuex)

// 准备actions——用于相应组件中的动作
// const actions = {}
// 准备mutations——用于操作数据(state)
// const mutations = {}
// 准备state——用于存储数据
// const state = {}
// 准备getters——用于将state中的数据进行加工
// const getters = {}

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions,
    }
})