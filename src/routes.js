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
];