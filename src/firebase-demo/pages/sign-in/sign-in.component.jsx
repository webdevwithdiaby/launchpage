import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '../../components/button/button.component';
import FormInput from '../../components/form-input/form-input.component';
import {auth,provider} from '../../firebase/firebase.utils';

function SignInPage() {
    const [credentials,setCredentials] = useState({email:'',password:''});

    const handleChange = e => {
        const {name,value} = e.target;
        setCredentials(prev => ({...prev,[name]:value}));
    }

    const signIn = e => {
        e.preventDefault();
        alert('Sign in ' + credentials.email+' ' +credentials.password);
    }

    const signUp = e => {
        e.preventDefault();
        auth.signInWithPopup(provider);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form  className="form">
                <FormInput
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter email'
                    label='Email'
                    value={credentials.email}
                    handler={handleChange}
                />
                <FormInput
                    type='password'
                    name='password'
                    id='password'
                    label='Password'
                    placeholder='Enter password'
                    value={credentials.password}
                    handler={handleChange}
                />
                <div className="form__group">
                   <Button handler={signIn} >Sign in </Button>
                </div>
                <div className="form__group">
                    <p className="form__or">or</p>
                </div>
                <div className="form__group">
                <Button handler={signUp} >Sign up with Google </Button>
                </div>
                <div className="form__group">
                    <p className="form__text-new-account">
                        Don't have an account? <Link className='form__link' to='/sign-up' >Sign up here</Link>
                    </p>
                    <Link className='form__link' to='/forgot-password' >Forgot Password</Link>
                </div>
            </form>
        </div>
    )
}

export default SignInPage
