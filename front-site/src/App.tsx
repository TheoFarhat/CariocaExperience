import React from 'react';
import Header from './components/Header';
import ApiRender from './components/ApiRender';
import HomePage from './pages/HomePage';
import EventsMap from "./components/EventsMap";
import MyPosts from "./pages/MyPosts";
import Profile from './pages/Profile';
import EditProfile from "./pages/EditProfile"
import Login from "./pages/Login";
import SignIn from "./pages/SingIn";
import CreatePost from './pages/CreatePost';
import {Outlet} from "react-router-dom";

function App() {
  return (
    
      <Outlet/>
    
  );
}

export default App;
