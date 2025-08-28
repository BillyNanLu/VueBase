// 人员相关的配置
import axios from 'axios'
import { nanoid } from 'nanoid'

export default {
    namespaced: true,
    actions: {
        addPersonMai(context, value) {
            if (value.name.indexOf('Mai') === 0)
                context.commit('ADD_PERSON', value)
            else
                alert("first name of the new added person must be 'Mai'")
        },
        addPersonServer(context) {
            axios.get('https://v1.hitokoto.cn/?c=d').then(
                Response => {
                    context.commit('ADD_PERSON', {id: nanoid(), name: Response.data.hitokoto})
                },
                Error => {
                    alert(Error.message)
                },
            )
        },
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations中的ADD_PERSON被调用了')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: 'GeJingyi' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
}