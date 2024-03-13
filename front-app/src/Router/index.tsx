import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Login from "../pages/Login";
import Tabs from "./Tabs";
import SignIn from "../pages/SignIn";
import AuthProvider from "../contexts/auth";
const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
            headerShown: false,
              }}
            />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
            />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
                headerShown: false,
            }}
            />
        </Stack.Navigator>
      </AuthProvider> 
    </NavigationContainer>
  );
}


