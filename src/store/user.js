import firebase from 'firebase/app'
export default {
    state: {
        user: {
            
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        getTotalAssets(state) {
            return state.user.ownAssets * state.currentPrice;
        }, 
    },
    mutations: {
        setInfo(state, info) {
            state.user = info;
        },
        clearUser(state) {
            state.user = {};
        }
    },
    actions: {
        async fetchInfo({dispatch, commit}) {
            try {
                const uid = await dispatch('getUid');
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
                commit('setInfo', info);
            }
            catch(e) {
                console.log(e)
            }
        }
    }
}