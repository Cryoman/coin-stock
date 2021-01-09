import Vue from 'vue';
import Vuex from 'vuex';

import firebase from 'firebase/app'
import info from './user'
import auth from './auth'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        ownAssets: 0,
        currentPrice: 0
    },
    getters: {

    },
    mutations: {
        getCurrentPrice(state, current) {
            state.currentPrice = current;
        }
    },
    actions: {
        getCurrentPrice(context, current) {
            context.commit('getCurrentPrice', current)
        },
        async buy({dispatch}, {balance, ownAssets, buyCount, amount}) {
            try {
                const uid = await dispatch('getUid');
                await firebase.database().ref(`/users/${uid}/info`).update({
                    balance: balance-=buyCount,
                    ownAssets: ownAssets+=amount
                })
            
            }
            catch (e) {
                console.log(e)
            }
        },
        async sell({ dispatch }, { balance, ownAssets, sellCount, amount }) {
            try {
                const uid = await dispatch('getUid');
                await firebase.database().ref(`/users/${uid}/info`).update({
                    balance: balance += sellCount,
                    ownAssets: ownAssets -= amount
                })

            }
            catch (e) {
                console.log(e)
            }
        }
    },
    modules: {
        info,
        auth
    }
})