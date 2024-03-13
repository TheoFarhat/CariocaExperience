import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {
  createBrowserRouter, RouterProvider 
} from "react-router-dom";
import HomePage from './pages/HomePage';
import MyPosts from './pages/MyPosts';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Login from './pages/Login';
import SignIn from './pages/SingIn';
import CreatePost from './pages/CreatePost';
import AuthProvider from './contexts/auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/home",
        element: <HomePage/>
        },
        {
          path: "/myposts",
          element: <MyPosts/>
        },
        {
          path: "/profile",
          element: <Profile/>
        },
        {
          path: "/editprofile",
          element: <EditProfile/>
        },
        
        {
          path: "/signin",
          element: <SignIn/>
        },
        {
          path: "/createpost",
          element: <CreatePost/>
        },
    ]
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    
  </React.StrictMode>
);
