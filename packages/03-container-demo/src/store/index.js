import {createStore} from 'vuex'

// 状态管理（全局、共享）
const store = createStore({
    state: {
        login: {
            info: {
                title: '03-container-demo',
                desc: '这是一个Vue Demo项目'
            }
        }
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})

export default store