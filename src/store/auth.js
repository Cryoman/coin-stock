import firebase from 'firebase/app'
export default {
    actions: {
        async login(context, {email, password}) { //первым аргументом необходимо передавать контекст, без него работать не будет
            await firebase.auth().signInWithEmailAndPassword(email, password);
        },
        async registration({dispatch}, {email, password, name, ownAssets = 0, controlPrice = 0}) { //первый аргумент, даже если он один, необходимо передавать в качестве объекта
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                const uid = await dispatch('getUid');
                await firebase.database().ref(`/users/${uid}/info`).set({
                    balance: 100000,
                    name,
                    ownAssets,
                    controlPrice
                })
                await firebase.database().ref(`/users/${uid}/rates`).set({
                    ...new Array(14).fill(this.getters.getCurrent)
                })
            }
            catch(e) {
                console.log(e)
            }
        },
        async logout({commit}) {
            await firebase.auth().signOut();
            commit('clearUser');
        },
        getUid() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        }
    }
}