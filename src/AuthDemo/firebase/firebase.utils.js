import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNPl5axDq2p9TQcENhuc_WeXto0cY0mys",
    authDomain: "auth-demo-16ef3.firebaseapp.com",
    projectId: "auth-demo-16ef3",
    storageBucket: "auth-demo-16ef3.appspot.com",
    messagingSenderId: "360200448563",
    appId: "1:360200448563:web:243bf071d95743453a9146"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserData = async (user,otherData) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    console.log(snapshot);
    if (snapshot.exists === false) {
        //user does not exist in database
        console.log('Saving data to firebase');
        const {uid,displayName,email} = user;
        const createdAt= new Date();
        try {
            await userRef.set({
                            createdAt,
                            displayName,
                            email,
                            ...otherData
                        })
                    } catch (error) {
                        console.log('an error occurred',error.message);
                    }
                }else {
                    //user already exists in database 
                }
    return userRef;            

}

export default firebase;