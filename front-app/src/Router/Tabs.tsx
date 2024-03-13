
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import HomePage from "../pages/HomePage";
import { View } from "react-native";
import MyEvents from "../pages/MyEvents";
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import Profile from "../pages/Profile";
import ProfileStack from "./ProfileStack";



  const Tab = createBottomTabNavigator()



export default function Tabs() {
    return (
     
            <Tab.Navigator screenOptions={{
           headerShown: false,
           tabBarShowLabel: false,
           tabBarStyle: {
            backgroundColor: "#E48A00",
            bottom: 0,
            height: 50,
            left: 0,
            right: 0,
            elevation: 0,
            position: "absolute",
            borderTopColor: "black",
            borderTopWidth: 1
           }
        }}>   
            <Tab.Screen
             name="Home"
             component={HomePage}
             options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={{alignItems: "center", justifyContent: "center"}}>
                            {focused? <Ionicons name="md-home-sharp" size={30} color="black" />:<Ionicons name="md-home-outline" size={30} color="black" /> }

                        </View>
                    ) 
                }
             }}
             />
            <Tab.Screen
            name="myEvents"
            component={MyEvents}
            options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={{alignItems: "center", justifyContent: "center"}}>
                            {focused? <AntDesign name="heart" size={30} color="black" />: <AntDesign name="hearto" size={30} color="black" />}
                        </View>
                    ) 
                }
             }}
            />
            <Tab.Screen
            name="Profile"
            component={ProfileStack}
            options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={{alignItems: "center", justifyContent: "center"}}>
                            {focused? <Ionicons name="person-circle-sharp" size={32} color="black" />: <Ionicons name="person-circle-outline" size={32} color="black" />}
                        </View>
                    ) 
                }
             }}
            />
        </Tab.Navigator>
        
        
    );
}
