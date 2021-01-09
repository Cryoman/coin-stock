import Main from './components/Main.vue';
export const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/assets',
        name: 'Assets',
        component: () => import(/* webpackChunkName: "assets"*/ './components/Assets.vue')
    },    
    {
        path: '/signin',
        name: 'SignIn',
        component: () => import(/* webpackChunkName: "signIn"*/ './components/SignIn.vue')
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "signUp"*/ './components/SignUp.vue')
    },
];