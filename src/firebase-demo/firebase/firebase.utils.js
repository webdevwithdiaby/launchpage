import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCk5QCPBnDWxWO1MO1_cyDIK0fF1PN4_Lw",
    authDomain: "fir-demo-e1681.firebaseapp.com",
    projectId: "fir-demo-e1681",
    storageBucket: "fir-demo-e1681.appspot.com",
    messagingSenderId: "325663544074",
    appId: "1:325663544074:web:886257f13e5143bb04a0f3"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });