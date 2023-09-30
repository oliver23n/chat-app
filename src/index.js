import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


import Container from './Container';
import App from './App';
import LoginForm from './components/LoginForm';
import Error from './Error';


const router =createBrowserRouter([
    {
        path:'/',
        element: <Container/>,
        errorElement: <Error/>,
        children: [
            {
                index:true,
                element: <App/>
            },
            {
                path:'/login',
                element:<LoginForm/>
            }
        ]
    }
])

ReactDOM.createRoot( document.getElementById('root')).render(
    <RouterProvider router={router} />
)

