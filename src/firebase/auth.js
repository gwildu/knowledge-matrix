import {log} from '../logging'
import {getFirebaseInstance} from './index'

const logError = (e, where) => log(`error in firebase/auth -> ${where} - code: ${e.code} - message: ${e.message}`)

export const registerByEmail = (email, pw) => {
  const auth = getFirebaseInstance().auth()
  return (auth
    .createUserWithEmailAndPassword(email, pw)
    .catch(e => logError(e, 'registerByEmail')))
}

export const signInByEmail = (email, pw) => {
  const auth = getFirebaseInstance().auth()
  return (auth
    .signInWithEmailAndPassword(email, pw)
    .catch(e => logError(e, 'signInByEmail')))
}

export const signOut = () => {
  const auth = getFirebaseInstance().auth()
  const {uid, displayName} = auth.currentUser
  return (auth.signOut()
    .then(() => log(`successfully logged out user uid: ${uid}, name: ${displayName}`))
    .catch(e => logError(e, 'signOut')))
}

export const deleteUser = () => {
  const auth = getFirebaseInstance().auth()
  const {uid, displayName, delete: deleteUser} = auth.currentUser
  return (deleteUser()
    .then(() => {
      log(`successfully deleted out user uid: ${uid}, name: ${displayName}`)
    })
    .catch(e => log(e, 'deleteUser')))
}
