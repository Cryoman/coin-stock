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
            state.user.role = 'Guest';
        }
    },
    actions: {
        async fetchInfo({dispatch, commit}) {
            try {
                const uid = await dispatch('getUid');
                if(uid) {
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
                commit('setInfo', info);
                } else {
                    commit('setInfo', {role: 'Guest'})
                }
                
            }
            catch(e) {
                console.log(e)
            }
        }
    }
}