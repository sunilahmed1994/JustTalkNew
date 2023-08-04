import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const LoginScreen2 = ({navigation}) => {
    useEffect(() => {
        // Navigate to the login screen after 5 seconds
        const timer = setTimeout(() => {
          navigation.navigate('LoginScreen3');
        }, 1000); // 1 seconds
    
        // Clear the timer when the component is unmounted
        return () => clearTimeout(timer);
      }, [navigation]);
  return (

    <View styles={styles.container}>

      <View>
        <Image
          source={require('../../../assets/justtalk.png')}
          style={styles.headerImage}
        />
      </View>

      <View>
        <Text style={styles.textStyle}>Welcome To Login!</Text>
      </View>

      <View style={styles.underLineView}/>
      </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    marginTop: responsiveHeight(6),
    marginLeft: responsiveWidth(18),
    width: responsiveWidth(57), 
    height: responsiveHeight(15),
  },
  textStyle: {
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(3),
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3.3),
    textAlign: 'center',
    color: 'black'

  },
  underLineView:{
    marginRight: responsiveWidth(24),
    height:responsiveHeight(1),
    borderColor:'#F6CD5B', 
    width:responsiveWidth(30),
    borderRadius:50,
    backgroundColor:'#F6CD5B',
    alignSelf:'center',
  }
});

export default LoginScreen2;
