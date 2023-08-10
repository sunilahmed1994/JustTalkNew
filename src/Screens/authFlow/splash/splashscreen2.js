import React, { useEffect } from 'react';
import { View, Text,  Image } from 'react-native';
import { appStyles } from '../../../services/utilities/appstyle';

const SplashScreen2 = ({navigation}) => {

    useEffect(() => {
        // Navigate to the login screen after 5 seconds
        const timer = setTimeout(() => {
          navigation.navigate('LoginScreen');
        }, 1000); // 2 seconds
    
        // Clear the timer when the component is unmounted
        return () => clearTimeout(timer);
      }, [navigation]);
    

  return (
    <View style={[appStyles.splashcontainer,appStyles.splash2backgroundcolor]}>
      <Image style={appStyles.splash2logo} source={require('../../../assets/launchscreen.png') }/>
    </View>
  );
}



export default SplashScreen2;
