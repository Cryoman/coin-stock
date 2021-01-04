import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        balance: 100000,
        ownAssets: 0,
        currentPrice: 0
    },
    getters: {
        getTotalAssets(state) {
            return state.ownAssets * state.currentPrice;
        },
    },
    mutations: {
        buy(state, {buyCount, amount}) {
            state.balance -= buyCount;
            state.ownAssets += amount;
        },
        sell(state, {sellCount, amount}) {
            state.balance += sellCount;
            state.ownAssets -= amount;
        },
        getCurrentPrice(state, current) {
            state.currentPrice = current;
        }
    },
    actions: {
        getCurrentPrice(context, current) {
            context.commit('getCurrentPrice', current)
        }
    }
})