import React ,{Component} from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen1 from './src/Screens/splashscreen1';
import SplashScreen2 from './src/Screens/splashscreen2';
import LoginScreen from './src/Screens/loginscreen';
import LoginScreen2 from './src/Screens/loginscreen2';
import LoginScreen3 from './src/Screens/loginscreen3';
import ForgetPasswordScreen from './src/Screens/forgetpassword';
import SignUpScreen from './src/Screens/signupscreen';
import ProfileScreen from './src/Screens/profilescreen';
import ChatScreen  from './src/Screens/chatscreen';


const Stack = createNativeStackNavigator();

export class App extends Component {
  render() {
    return (
     
          <NavigationContainer>
            <Stack.Navigator >
              <Stack.Screen name="SplashScreen1" component={SplashScreen1} options={{ headerShown: false }} />
              <Stack.Screen name="SplashScreen2" component={SplashScreen2} options={{ headerShown: false }} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="LoginScreen2" component={LoginScreen2} options={{ headerShown: false }} />
              <Stack.Screen name="LoginScreen3" component={LoginScreen3} options={{ headerShown: false }} />
              <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} options={{ headerTitle:'Reset Your Password' }} />
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerTitle:'Sign Up' }} />
              <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
              <Stack.Screen name= "ChatScreen" component={ChatScreen} options={{headerTitle:"ChatScreen"}}/>
             
            </Stack.Navigator>
          </NavigationContainer>
      
    );
  }
 
};

export default App;
