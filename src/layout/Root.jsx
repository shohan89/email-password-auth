import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <nav>
                <Link className='m-2' to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;