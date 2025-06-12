import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, navigate } from './src/components/RootNavigation';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUp from './src/screens/SignUp';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from 'react';


const Stack = createStackNavigator();


export default function App() {
  
  useEffect(() => {
    
    async function loadInitialRoute(){
      if(!await AsyncStorage.getItem("CUser")){
        navigate("Login");
      }
      else{
        navigate("Home");
      }
    }
    const timeout = setTimeout(() => {
      loadInitialRoute();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);



  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      
       {/* Caso já haja um usuário atual, entra na tela inicial, caso contrário, redireciona o app
       para a tela de login */}
      
    </NavigationContainer>
  );
}