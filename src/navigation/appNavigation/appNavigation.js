import React ,{Component} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgetPasswordScreen from '../../../src/Screens/appFlow/forgetpassword/forgetpassword';
import ProfileScreen from '../../../src/Screens/appFlow/profilescreen/profilescreen';
import ChatScreen  from '../../../src/Screens/appFlow/chatscreen/chatscreen';


const Stack = createNativeStackNavigator();

const AppNavigation =()=> {
 
    return (
     
            <Stack.Navigator >
              <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} options={{ headerTitle:'Reset Your Password' }} />
              <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
              <Stack.Screen name= "ChatScreen" component={ChatScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
       
    );

 
};

export default AppNavigation;
