import React, {useState,useEffect} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import SignInPage from './pages/sign-in/sign-in.component';

import './app.css';
import WelcomePage from './pages/welcome/welcome.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import ForgotPasswordPage from './pages/forgot-password/forgot-password.component';
import { auth } from './firebase/firebase.utils';

const App = () => {
    const [currentUser,setCurrentUser] = useState(null);

    useEffect( () => {
        const closeAuthListener = auth.onAuthStateChanged((user) => {
            if (user) {
              setCurrentUser(user)
            } else {
              // User is signed out
            }
          });
        return () => {
            closeAuthListener();
        }
    } ,[])
    return (
        <BrowserRouter>
            <div className="app">
                { currentUser ? <WelcomePage/> :
                <Switch>
                    <Route exact path={'/'} component={SignInPage}/>
                    <Route  path={'/sign-up'} component={SignUpPage}/>
                    <Route  path={'/forgot-password'} component={ForgotPasswordPage}/>
                </Switch>
                }
            </div>
        </BrowserRouter>
    );
}

export default App;