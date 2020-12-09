import Main from './components/Main.vue';
export const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/coins',
        name: 'Coins',
        component: () => import(/* webpackChunkName: "coins"*/ './components/Stock.vue')
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import(/* webpackChunkName: "portfolio"*/ './components/Portfolio.vue')
    },    
];