import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app)

const LoginBootstrap = () => {
    const [ success, setSuccess ] = useState(false);
    const handleSubmit = e =>{
        e.preventDefault();
        setSuccess(false)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword( auth, email, password )
            .then( result =>{
                const user = result.user;
                console.log(user);
                setSuccess(true);
            })
            .catch( error =>{
                console.error( 'error', error );

            } )
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-center text-success'>Please Login</h3>
            <form onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput" name='email' placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" name='password' placeholder="Enter your password" required/>
                </div>
                <button className='btn btn-primary' type="submit">Login</button>
            </form>
            { success && <p>Login Successfull</p> }
            <p>New to this website? Please <small><Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default LoginBootstrap;