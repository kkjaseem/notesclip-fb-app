//import * as firebase from 'firebase';
import firebase from 'firebase' 
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyAMfEhWr-nLAjmMzKQBvXYZjeNFu-ATthA",
    authDomain: "noteclip-fb-app.firebaseapp.com",
    projectId: "noteclip-fb-app",
    storageBucket: "noteclip-fb-app.appspot.com",
    messagingSenderId: "675865800360",
    appId: "1:675865800360:web:0dd527a74790e3f5745c9d",
    measurementId: "G-84KBW9XPHG"
  };

  firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;