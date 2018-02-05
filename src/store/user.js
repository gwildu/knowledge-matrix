import { bindUserContent, detachUserContent, getFirebaseInstance } from '../firebase'
import {
  registerByEmail,
  signInByEmail,
  signOut,
  deleteUser
} from '../firebase/auth'
console.info(typeof signInByEmail)

const state = {
  id: '',
  nickName: ''
}

const getters = {
  user: state => ({id: state.id, nickName: state.nickName})
}

const actions = {
  bindFirebase({commit, dispatch}) {
    const auth = getFirebaseInstance().auth()
    auth.onAuthStateChanged(user => {
      if (user) {
        commit('SET_ID', user.uid)
        dispatch('bindUserData')
        dispatch({type: 'knowledgeMatrix/bindUserData'}, {root: true})
      } else {
        dispatch('detachUserData')
        dispatch({type: 'knowledgeMatrix/detachUserData'}, {root: true})
        commit('SET', {})
      }
    })
  },
  bindUserData({commit, getters}) {
    const uid = getters.user.id
    bindUserContent(uid, `nickName`, data => {
      commit('SET_NICK_NAME', data)
    })
  },
  detachUserData({commit, getters}) {
    const uid = getters.user.id
    detachUserContent(uid, 'nickName')
    commit('SET_NICK_NAME', '')
  },
  registerByEmail({commit}, credentials) {
    console.info(credentials)
    registerByEmail(credentials.email, credentials.password)
  },
  signInByEmail({commit}, credentials) {
    console.info(credentials)
    signInByEmail(credentials.email, credentials.password)
  },
  singOut({commit}) {
    signOut()
      // .then(() => commit('SET', {}))
  },
  deleteUser() {
    deleteUser()
  }
}

const mutations = {
  SET_ID(state, newId) {
    state.id = newId
  },
  SET_NICK_NAME(state, newNickName) {
    state.nickName = newNickName
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
