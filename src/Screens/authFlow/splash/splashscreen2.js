import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

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
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/launchscreen.png') }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6CD5B'
  },
  logo: {
    width: responsiveWidth(50), 
    height: responsiveHeight(30),
  },
})

export default SplashScreen2;
