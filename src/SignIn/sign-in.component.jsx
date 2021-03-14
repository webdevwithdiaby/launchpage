import React, {useState} from 'react'
import Button from './button/button.component';
import FormINput from './form-input/form-input.component';

function SignIn() {
    const [credentials,setCredentials] = useState({email:'',password:''});

    const handleCredentialsChange = e => {
        const {name,value} = e.target;
        setCredentials(prev => ({...prev,[name]:value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        setCredentials({email:'',password:''});
    }

    return (
        <div className='sign-in' >
            <h2>I already have an account</h2>
            <h3>Sign in with email and password</h3>
            <form action="#" className="form" onSubmit={handleSubmit} >
                    <FormINput 
                        type="text"
                        id='email'
                        name='email'
                        value={credentials.email}
                        required
                        label='Email'
                        handleCredentialsChange={handleCredentialsChange}
                    />
                    <FormINput 
                        type="password"
                        id='password'
                        name='password'
                        value={credentials.password}
                        required
                        label='Password'
                        handleCredentialsChange={handleCredentialsChange}
                    />
                    <Button type="submit">SIGN IN</Button>
            </form>
        </div>
    )
}

export default SignIn
