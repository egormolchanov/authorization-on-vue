import VueRouter from 'vue-router'
import Home from './components/Home'
import student from './components/pages/student'
import teacher from './components/pages/teacher'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/student',
            component: student
        },
        {
            path: '/teacher',
            component: teacher
        },
    ],
    mode: 'history'
})