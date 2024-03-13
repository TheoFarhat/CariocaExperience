import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Login from "./src/pages/Login";
import HomePage from "./src/pages/HomePage";
import  Tabs from "./src/Router/Tabs";
import MyEvents from "./src/pages/MyEvents";
import Profile from "./src/pages/Profile";
import EditProfile from "./src/pages/EditProfile";
import Router from "./src/Router";
import SignIn from "./src/pages/SignIn";
import ProfileStack from "./src/Router/ProfileStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Bayon": require("./assets/fonts/Bayon-Regular.ttf"),
    "Bebas": require("./assets/fonts/BebasNeue-Regular.ttf"),  
  })
  if (!fontsLoaded) {
    return <AppLoading/>
  }
  return (
    <>
    
      <Router/>
    
      
    </>

  );
}