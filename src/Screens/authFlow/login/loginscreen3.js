import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import AuthNavigation from '../../../navigation/authNavigation/authNavigation';

const LoginScreen3 = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    
<KeyboardAwareScrollView contentContainerStyle={{ flexGrow:1 }}
      keyboardShouldPersistTaps="handled" behavior="padding" >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1,  justifyContent: 'space-around', alignItems: 'center' }}>
          <Image
            source={require('../../../assets/justtalk.png')}
            style={styles.headerImage}
          />
        </View>

        <View style={{ flex: 0.3,  justifyContent: 'flex-end' }}>
          <Text style={styles.textStyle}>Welcome To Login!</Text>
        </View>

        <View style={styles.underLineView} />
      </View>


      <View style={{ flex: 1}}>
        <View style={styles.textInputFieldMainView}>
          <Text style={styles.textLabel}>Email</Text>
            <TextInput  style={styles.textInput} placeholder='johndoe123'></TextInput>
        </View>

        <View style={styles.textInputFieldMainView}>
          <Text style={styles.textLabel}>Password</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput secureTextEntry={!isPasswordVisible} style={styles.textInput} placeholder='**********'></TextInput>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image style={styles.textInputImage} source={require('../../../assets/eye.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', flex: 2, marginTop:responsiveHeight(1)}}>
          <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
          <Text style={[styles.textColor, styles.centerAlign]}>Remember me</Text>
          <TouchableOpacity style={styles.touchableForget} onPress={() => { navigation.navigate('appNavigation',{screen:'ForgetPasswordScreen'}) }}>
            <Text style={styles.textColor}>Forget Password</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.loginButtonView]}>
          <TouchableOpacity onPress={() => { navigation.navigate('appNavigation', { screen: 'ProfileScreen' }) }}><Text style={styles.loginText}>LOG IN</Text></TouchableOpacity>
        </View>
      </View>


      <View style={{ flex: 1}}>
        <View style={{ flex: 1}}>

        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
          <View style={styles.createAccountView}>
            <TouchableOpacity onPress={() => { navigation.navigate('SignUpScreen') }}>
              <Text style={[styles.textColor, styles.centerAlign, styles.createAccountText]}>
                CREATE AN ACCOUNT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
</KeyboardAwareScrollView>

    
  );
};

const styles = StyleSheet.create({
  textInputImage: {
    marginLeft: responsiveWidth(1),
    // height: responsiveHeight(3),
    width: responsiveWidth(5),
  },
  textInputFieldMainView: {
    flex: 1,
    borderRadius: responsiveWidth(3),
    width: responsiveWidth(90),
    // height: responsiveHeight(8),
    backgroundColor: '#EEEEE0',
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(1),
  },
  textLabel: {
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(4),
    width: responsiveWidth(50),
    color: 'black',
  },
  createAccountText: {
    paddingTop: responsiveHeight(2),
  },
  createAccountView: {
    borderRadius: responsiveWidth(10),
    width: responsiveWidth(70),
    height: responsiveHeight(7),
    backgroundColor: '#B7B7B780',
    alignSelf: 'center',
    
  },
  dontHaveAccountText: {
    marginTop: responsiveHeight(2),
    color: 'black',
    alignSelf: 'center',
    marginBottom: responsiveHeight(1),
  },
  loginText: {
    color: 'white',
    alignSelf: 'center',
    paddingTop: responsiveHeight(2),
  },
  loginButtonView: {
    marginTop: responsiveHeight(3),
    height:responsiveHeight(6),
    borderRadius: responsiveWidth(10),
    width: responsiveWidth(70),
    backgroundColor: 'black',
    alignSelf: 'center',
    flex: 1,
    marginBottom: responsiveHeight(2),
    
  },
  touchableForget: {
    paddingLeft: responsiveWidth(35),
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
  headerImage: {

    width: responsiveWidth(57), // Adjust the size according to your logo's dimensions
    height: responsiveHeight(15), // Adjust the size according to your logo's dimensions
  },
  textStyle: {
    justifyContent: 'space-around',
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    color: 'black'

  },
  checkbox: {
    alignSelf: 'center',
    marginLeft: responsiveWidth(4),

  },
  underLineView: {
    marginRight: responsiveWidth(24),
    height: responsiveHeight(1),
    borderColor: '#F6CD5B',
    width: responsiveWidth(30),
    borderRadius: 50,
    backgroundColor: '#F6CD5B',
    alignSelf: 'center',
  },
  emailView: {
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(3),
    borderRadius: responsiveWidth(3),
    width: responsiveWidth(90),
    // height: responsiveHeight(5),
    backgroundColor: '#EEEEE0',
    flex: 1,

  },
  
  textInput: {
    marginLeft: responsiveWidth(3),
    width: responsiveWidth(75),
    color: 'black',
  },
  
 
  textColor: {
    color: 'black'
  },
  centerAlign: {
    alignSelf: 'center'
  },
});

export default LoginScreen3;
