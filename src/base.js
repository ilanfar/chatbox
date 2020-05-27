import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgEhsQV-D1rKfYkKvs8k1yL_tfFXyaKb0",
 authDomain: "chatbox-app-eaf73.firebaseapp.com",
 databaseURL: "https://chatbox-app-eaf73.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export{ firebaseApp }

export default base
