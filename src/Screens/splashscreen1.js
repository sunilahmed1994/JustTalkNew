import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen1 = ({navigation}) => {

  useEffect(() => {
    // Simulate some loading time, then navigate to the next screen
    setTimeout(() => {
      navigation.navigate('SplashScreen2');
    }, 2000); // 2 seconds
  }, []);


  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
  },
})

export default SplashScreen1;
