import Vue from 'vue';
import Vuex from 'vuex';

import firebase from 'firebase/app'
import info from './user'
import auth from './auth'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        ownAssets: 0,
        currentPrice: 0,
        visualizeData: null,
        controlPrice: 0,
        dynamic: null
    },
    getters: {
        getCurrent(state) {
            return state.currentPrice;
        },
        getVisualData(state) {
            return state.visualizeData;
        },
        getDynamic(state) {
            if (state.controlPrice > 0) {
                if (state.controlPrice > state.currentPrice) {
                    return ((state.currentPrice - state.controlPrice) / state.controlPrice * 100).toFixed(2);
                }
                if (state.controlPrice < state.currentPrice) {
                    return ((state.currentPrice - state.controlPrice) / state.currentPrice *100).toFixed(2);
                }

            } else {
                return '-';
            }
        },
    },
    mutations: {
        getCurrentPrice(state, current) {
            state.currentPrice = current;
        },
        setVisualData(state, currentVisual) {
            //console.log('mutation called')
            state.visualizeData = currentVisual;
        },
        setControlPrice(state, cp) {
            state.controlPrice = cp;
        }
    },
    actions: {
        async getCurrentPrice({ dispatch, commit }, current) {
            commit('getCurrentPrice', current);
            const uid = await dispatch('getUid');
            if(uid) {
            const controlPrice = (await firebase.database().ref(`/users/${uid}/info/controlPrice`).once('value')).val();
            commit('setControlPrice', controlPrice)
            }
        },
        async buy({ dispatch }, { balance, ownAssets, buyCount, amount, controlPrice }) {
            try {
                const uid = await dispatch('getUid');
                if(uid) {
                await firebase.database().ref(`/users/${uid}/info`).update({
                    balance: balance -= buyCount,
                    ownAssets: ownAssets += amount,
                    controlPrice
                })
            }
            }
            catch (e) {
                console.log(e)
            }
        },
        async sell({ dispatch }, { balance, ownAssets, sellCount, amount }) {
            try {
                const uid = await dispatch('getUid');
                if(uid) {
                await firebase.database().ref(`/users/${uid}/info`).update({
                    balance: balance += sellCount,
                    ownAssets: ownAssets -= amount
                })
            }
            }
            catch (e) {
                console.log(e)
            }
        },
        async refreshData({ dispatch, commit }, context) {
            try {
                const uid = await dispatch('getUid');
                if(uid) {
                const getData = await firebase.database().ref(`users/${uid}/rates`)
                await getData.once('value', async (snapshot) => {
                    const data = snapshot.val()
                    data.shift()
                    data.push(context)
                    // dispatch('drawChart')
                    await firebase.database().ref(`users/${uid}/rates`).set({
                        ...data
                    })
                })
                //console.log(this.getters.getVisualData, ' old value')
                const info = (await firebase.database().ref(`/users/${uid}/rates`).once('value')).val()
                commit('setVisualData', info)
            } else {
                let tempArr = new Array(14).fill(this.getters.getCurrent);
                commit('setVisualData', tempArr)
                
            }
            }
            catch (e) {
                console.log(e)
            }
        },
        async drawChart({ dispatch }) {
            const uid = await dispatch('getUid');
            if(uid) {
            (await firebase.database().ref(`/users/${uid}/rates`).once('value')).val()
            //console.log("should be first", this.getters.getCurrent)
            }
        }
    },
    modules: {
        info,
        auth
    }
})