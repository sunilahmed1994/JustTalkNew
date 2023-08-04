import React  from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen1 from '../../Screens/authFlow/splash/splashscreen1';
import SplashScreen2 from '../../Screens/authFlow/splash/splashscreen2';
import LoginScreen from '../../Screens/authFlow/login/loginscreen';
import LoginScreen2 from '../../Screens/authFlow/login/loginscreen2';
import LoginScreen3 from '../../Screens/authFlow/login/loginscreen3';
import SignUpScreen from '../../Screens/authFlow/signup/signupscreen';



const Stack = createNativeStackNavigator();

const AuthNavigation =()=> {
 
    return (
     
         
            <Stack.Navigator >
              <Stack.Screen name="SplashScreen1" component={SplashScreen1} options={{ headerShown: false }} />
              <Stack.Screen name="SplashScreen2" component={SplashScreen2} options={{ headerShown: false }} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="LoginScreen2" component={LoginScreen2} options={{ headerShown: false }} />
              <Stack.Screen name="LoginScreen3" component={LoginScreen3} options={{ headerShown: false }} />
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerTitle:'Sign Up' }} />
            </Stack.Navigator>
         
      
    );
  
 
};

export default AuthNavigation;
