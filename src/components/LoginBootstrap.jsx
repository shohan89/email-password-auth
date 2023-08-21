import React from 'react';
import { Link } from 'react-router-dom';

const LoginBootstrap = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email;
        const password = form.password;
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-center text-success'>Please Login</h3>
            <form onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput" name='email' placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" name='password' placeholder="Enter your password" required/>
                </div>
                <button className='btn btn-primary' type="submit">Login</button>
            </form>
            <p>New to this website? Please <small><Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default LoginBootstrap;