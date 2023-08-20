import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterReactBootstrap = () => {
    const handleRegister = ( e ) =>{
        e.preventDefault();
        const email = e.target.email.value;
        console.log( email );
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary mt-5 mb-3'>Please Register</h3>
            <Form onSubmit={ handleRegister }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
    </Form>
        </div>
    );
};

export default RegisterReactBootstrap;