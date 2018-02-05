const firebase = require('firebase')

const config = {
  apiKey: 'AIzaSyDGRmi99siKRtlVKNIhocmpc9HIAyul4M0',
  authDomain: 'gwi-knowledge-matrix.firebaseapp.com',
  databaseURL: 'https://gwi-knowledge-matrix.firebaseio.com',
  projectId: 'gwi-knowledge-matrix',
  storageBucket: 'gwi-knowledge-matrix.appspot.com',
  messagingSenderId: '589198151376'
}

export function getFirebaseInstance() {
  process.firebaseInstance =
    process.firebaseInstance || firebase.initializeApp(config)
  return process.firebaseInstance
}

export function convertFirebaseListIntoArray(list, fields) {
  const result = []
  Object.keys(list).forEach((key, index) => {
    const item = {key}
    fields.forEach(field => {
      item[field] = list[key][field]
    })
    result[index] = item
  })
  return result
}

export function bindContent(contentId, callback) {
  const db = getFirebaseInstance().database()
  db.ref(`${contentId}`).on('value', snapshot => {
    callback(snapshot.val())
  })
}

export function detachContent(contentId) {
  const db = getFirebaseInstance().database()
  db.ref(`${contentId}`).off()
}

function concatenateUserContentIds(userId, contentId) {
  return `user/${userId}/${contentId}`
}

export function bindUserContent(userId, contentId, callback) {
  bindContent(concatenateUserContentIds(userId, contentId), callback)
}

export function detachUserContent(userId, contentId) {
  detachContent(concatenateUserContentIds(userId, contentId))
}

export function storeContent(contentId, payload) {
  const db = getFirebaseInstance().database()
  db.ref(`${contentId}`).set(payload)
}

export function pushListContent(contentId, payload) {
  const db = getFirebaseInstance().database()
  db.ref(`${contentId}`).push().set(payload)
}

export function storeUserContent(userId, contentId, payload) {
  storeContent(concatenateUserContentIds(userId, contentId), payload)
}

export function pushUserListContent(userId, contentId, payload) {
  pushListContent(concatenateUserContentIds(userId, contentId), payload)
}
