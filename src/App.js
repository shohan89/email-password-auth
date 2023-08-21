import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './layout/Root';
import { Children } from 'react';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';
import LoginBootstrap from './components/LoginBootstrap';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <RegisterReactBootstrap />
        },
        {
          path: '/login',
          element: <LoginBootstrap />
        },
        {
          path: '/register',
          element: <RegisterReactBootstrap />
        }
      ]
    }
  ])
  
  return (
    <div className="">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
