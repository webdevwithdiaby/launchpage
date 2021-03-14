import React, {useState,useEffect} from 'react';
import './app.css';
import firebase, {signInWithGoogle,createUserData,auth,firestore} from './firebase/firebase.utils';

const App = () => {
    const [currentUser,setCurrentUser] = useState(null);
    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log('signed in');
                const userRef = await createUserData(user);
                console.log(userRef);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id:snapshot.id,
                        ...snapshot.data()
                    })
                } );
            } else {
              // User is signed out
              console.log('signed out...');
              setCurrentUser(null)
            }
          });
        return () => {
            unsubscriber.close();
        }
    } , []);
    const signOut = () => {
        console.log('signing out...');
        auth.signOut();
    }
    return (
        <div className="app">
            <header className="header">
                <h1>Firebase Firestore</h1>
                {
                    currentUser === null ? 
                    <button className="btn" onClick={signInWithGoogle} >SIGN IN WITH GOOGLE</button>
                    :
                    <button className="btn" onClick={signOut} >SIGN OUT</button>
                }
            </header>
            <main>
                {
                    currentUser === null ? 
                    <h1 className="title">No user logged in</h1>
                    :
                    <div className="content">
                        <h1 className="user">User signed in</h1>
                        <p className="name"> {currentUser.displayName} </p>
                        <p className="email"> {currentUser.email} </p>
                    </div>
                }
            </main>
        </div>
    );
}

export default App;