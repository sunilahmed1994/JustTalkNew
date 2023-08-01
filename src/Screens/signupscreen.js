import React ,{useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const SignUpScreen = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView styles={styles.container}>
        <ScrollView>
    <View >
      <View style={{flex:1, backgroundColor:'green'}}>
          <View>
            <Image
              source={require('../assets/justtalk.png')}
              style={styles.headerImage}
            />
          </View>

          <View>
            <Text style={styles.textStyle}>Welcome To SignUp!</Text>
          </View>
          <View style={styles.underLineView}/>
      </View>

      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingContainer}>
      <View style={{flex:2, backgroundColor:'lightblue'}}>
          <View style={styles.textInputFieldMainView}>
                  <Text style={styles.textLabel}>Username</Text>
                  <View style={{flexDirection:'row'}}>
                    <TextInput secureTextEntry={true} style={styles.textInput} placeholder='johndoe123'></TextInput>
                    <TouchableOpacity>
                      <Image  style={styles.textInputImage} source={require('../assets/checkcircle.png')}/>
                    </TouchableOpacity>
                  </View>
              </View>


              <View style={styles.textInputFieldMainView}>
                  <Text style={styles.textLabel}>Password</Text>
                  <View style={{flexDirection:'row'}}>
                  <TextInput secureTextEntry={true} style={styles.textInput} placeholder='**********'></TextInput>
                  <TouchableOpacity>
                    <Image  style={styles.textInputImage} source={require('../assets/eye.png')}/>
                  </TouchableOpacity>
                  </View>
              </View>
            
              <View style={styles.textInputFieldMainView}>
                  <Text style={styles.textLabel}>Confirm Password</Text>
                  <View style={{flexDirection:'row'}}>
                  <TextInput secureTextEntry={true} style={styles.textInput} placeholder='**********'></TextInput>
                  <TouchableOpacity>
                    <Image  style={styles.textInputImage} source={require('../assets/eye.png')}/>
                  </TouchableOpacity>
                  </View>
              </View>


              <View style={{flexDirection:'row'}}>
                  <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
                  <Text style={[styles.align,styles.colorBlack]}>Accept T&C, Privacy Policy</Text>
              </View>

              <View style={styles.signUpBtnView}>
                <TouchableOpacity onPress={()=>{navigation.navigate('ProfileScreen')}}><Text style={[styles.colorWhite,styles.align,styles.topPadding]}>SIGNUP</Text></TouchableOpacity>
              </View>
          </View>

        <View style={{flex:1, backgroundColor:'pink'}}>
              <View>
                <Text style={[{marginBottom:10},styles.colorBlack,styles.align]}>Already have an account?</Text>
                  <View style={styles.loginBtnView}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('LoginScreen3')}}>
                      <Text style={[styles.align,styles.colorBlack,styles.topPadding]}>LOGIN</Text>
                    </TouchableOpacity>
                  </View>
              </View>
          </View>
        </KeyboardAvoidingView>
        </View>
    </ScrollView>
</SafeAreaView>

  );
};

const styles = StyleSheet.create({
  loginBtnView:{
    borderRadius:responsiveWidth(10), 
    width:responsiveWidth(70), 
    height:responsiveHeight(7), 
    backgroundColor:'#B7B7B780', 
    alignSelf:'center',
  },
  signUpBtnView:{
    marginTop:responsiveHeight(3), 
    borderRadius:responsiveWidth(10), 
    width:responsiveWidth(70), 
    height:responsiveHeight(7), 
    backgroundColor:'black', 
    alignSelf:'center',
  },
  topPadding:{
    paddingTop:responsiveHeight(2),
  },
  colorWhite:{
    color:'white'
  },
  align:{
    alignSelf:'center'
  },
  colorBlack:{
    color:'black'
  },
  textInputImage:{
    marginLeft:responsiveWidth(1),
    height:responsiveHeight(3),
    width:responsiveWidth(5),
  },
  textInput:{
    marginLeft:responsiveWidth(3),
    width:responsiveWidth(75),
    color:'black',
  },
  textLabel:{
    marginTop:responsiveHeight(1),
    marginLeft:responsiveWidth(4),
    width:responsiveWidth(50),
    color:'black',
  },
  textInputFieldMainView:{
    flex:1,
    borderRadius:responsiveWidth(3), 
    width:responsiveWidth(90), 
    height:responsiveHeight(10), 
    backgroundColor:'#EEEEE0',
    marginLeft:responsiveWidth(4),
    marginTop:responsiveHeight(2), 
  },
  container: {
    flex: 1,
  },
  headerImage: {

    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: responsiveHeight(7),
    marginLeft: responsiveWidth(17),
    marginRight: responsiveWidth(17),
    width: responsiveWidth(57), 
    height: responsiveHeight(15),
  },
  textStyle: {
    marginLeft: responsiveWidth(17),
    marginRight: responsiveWidth(17),
    marginTop: responsiveHeight(2),
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3.3),
    textAlign: 'center',
    color: 'black'

  },
  checkbox: {
    alignSelf: 'center',
    marginLeft:responsiveWidth(3),
    
  },
  underLineView:{
    marginRight: responsiveWidth(32),
    height:responsiveHeight(1),
    borderColor:'#F6CD5B', 
    width:responsiveWidth(30),
    borderRadius:50,
    backgroundColor:'#F6CD5B',
    alignSelf:'center',
  },
  
});

export default SignUpScreen;
