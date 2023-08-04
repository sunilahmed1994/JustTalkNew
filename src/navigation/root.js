import React ,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigation from './appNavigation/appNavigation';
import AuthNavigation from './authNavigation/authNavigation';


const Stack = createNativeStackNavigator();

const Root =()=>{
 
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='authNavigation' screenOptions={{headerShown:false}}>
              
              <Stack.Screen name="authNavigation" component={AuthNavigation}  />
              <Stack.Screen name="appNavigation" component={AppNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
      
    );
 
 
};

export default Root;
