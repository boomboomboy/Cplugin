import Vue from 'vue'
import Router from 'vue-router'  //引入vue-router
// import app from '../App.vue'
// import gogo from '../components/gogo.vue'
import gogo2 from '../components/gogo2.vue'
import hello from '../components/HelloWorld.vue'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:'app',
            component:hello
        },
        {
            path:'/cplugin',
            name:'gogo',
            component:()=>import('../../node_modules/vue-cplugin/src/App.vue')
            
        },
        {
            path:'gogo2',
            name:'gogo2',
            component:gogo2
        }
    ]
})