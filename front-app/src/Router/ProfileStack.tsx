import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";





function ProfileStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='EditProfile'
                component={EditProfile}
                options={{
                    headerTitle: "Voltar",
                    headerStyle: {
                        backgroundColor: "#E48A00",
                        borderBottomWidth: 1,
                        borderBottomColor: "black",
                        height: 60 
                    }
                  
                }} />
                
        </Stack.Navigator>
    );
}

export default ProfileStack;
