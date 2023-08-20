import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const RegisterReactBootstrap = () => {
    const [ passwordError, setPasswordError ] = useState('');
    const handleRegister = ( e ) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( email );
        if ( !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test( password ) ) {
            setPasswordError( 'Please enter a valid password!!' )
        }
        else{
            alert('Successfully submit!!');
        }
        createUserWithEmailAndPassword( auth, email, password )
            .then( result => {
                const user = result.user;
                console.log( user );
            } )
            .catch((error) => alert("Error: "+ error));
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary mt-5 mb-3'>Please Register</h3>
            <Form onSubmit={ handleRegister }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <p className='text-danger'>{ passwordError }</p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
    </Form>
        </div>
    );
};

export default RegisterReactBootstrap;