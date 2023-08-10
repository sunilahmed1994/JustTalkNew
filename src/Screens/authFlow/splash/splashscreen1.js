import React, { useEffect } from 'react';
import { View, Text,  } from 'react-native';
import { appStyles } from '../../../services/utilities/appstyle';

const SplashScreen1 = ({navigation}) => {

  useEffect(() => {
    // Simulate some loading time, then navigate to the next screen
    setTimeout(() => {
      navigation.navigate('SplashScreen2');
    }, 2000); // 2 seconds
  }, []);


  return (
    <View style={[appStyles.splashcontainer,appStyles.splash1backgroundcolor]}>
      <Text></Text>
    </View>
  );
}



export default SplashScreen1;
