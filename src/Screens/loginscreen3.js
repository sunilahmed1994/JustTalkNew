import React ,{useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView,KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const LoginScreen3 = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <>
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow:1}}
        keyboardShouldPersistTaps="handled"
        >
            <View style={{flex:1 }}>
                  <View style={{flex:1.3, backgroundColor:'blue', justifyContent:'space-around',alignItems:'center'}}>
                    <Image
                      source={require('../assets/justtalk.png')}
                      style={styles.headerImage}
                    />
                  </View>

                  <View style={{flex:0.3,backgroundColor:'skyblue', justifyContent:'flex-end'}}>
                    <Text style={styles.textStyle}>Welcome To Login!</Text>
                  </View>

                  <View style={styles.underLineView}/>
            </View>

        
      
      
            <View style={{flex:1.5, backgroundColor:'green'}}>
                <View style={styles.emailView}>
                    <Text style={styles.emilPasswordLabel}>Email</Text>
                    <TextInput style={styles.textInput} placeholder='johndoe@email.com'></TextInput>
                </View>

                <View style={[styles.passwordView]}>
                    <Text style={styles.emilPasswordLabel}>Password</Text>
                    <View style={{flexDirection:'row'}}>
                      <TextInput secureTextEntry={true} style={styles.textInput} placeholder='**********'></TextInput>
                      <TouchableOpacity>
                        <Image  style={{marginLeft:10}} source={require('../assets/eye.png')}/>
                      </TouchableOpacity>
                    </View>
                </View>
              
                <View style={{flexDirection:'row',flex:0.4,backgroundColor:'grey', marginTop:responsiveHeight(1),position:'relative'}}>
                    <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
                    <Text style={ [styles.textColor, styles.centerAlign]}>Remember me</Text>
                    <TouchableOpacity style={styles.touchableForget} onPress={()=>{navigation.navigate('ForgetPasswordScreen')}}>
                      <Text style={styles.textColor}>Forget Password</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.loginButtonView]}>
                  <TouchableOpacity onPress={()=>{navigation.navigate('ProfileScreen'); console.log("navigation: ",navigation);}}><Text style={styles.loginText}>LOG IN</Text></TouchableOpacity>
                </View>
            </View>
            

              <View style={{ flex:1, backgroundColor:'yellow'}}>
                  <View style={{flex:1}}>

                  </View>
                  <View style={{flex:1}}>
                    <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
                      <View style={styles.createAccountView}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('SignUpScreen')}}>
                          <Text style={[styles.textColor,styles.centerAlign,styles.createAccountText]}>
                            CREATE AN ACCOUNT
                          </Text>
                        </TouchableOpacity>
                      </View>
                  </View>
              </View>
          </ScrollView>   
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  createAccountText:{
    paddingTop:responsiveHeight(2),
  },
  createAccountView:{
    borderRadius:responsiveWidth(10), 
    width:responsiveWidth(70),
    height:responsiveHeight(7), 
    backgroundColor:'#B7B7B780', 
    alignSelf:'center',
  },
  dontHaveAccountText:{
    color:'black', 
    alignSelf:'center', 
    marginBottom:responsiveHeight(1),
  },
  loginText:{
    color:'white', 
    alignSelf:'center', 
    paddingTop:responsiveHeight(3),
  },
  loginButtonView:{
    flex:1,
    marginTop:responsiveHeight(4),
     borderRadius:responsiveWidth(10), 
     width:responsiveWidth(70),  
     height:responsiveHeight(4),
     backgroundColor:'black', 
     alignSelf:'center',
     marginBottom: responsiveHeight(2),
     position:'relative',
  },
  touchableForget:{
    paddingLeft:responsiveWidth(35), 
    alignSelf:'center',
  },
  container: {
    flex: 1,
  },
  headerImage: {
    
    width: responsiveWidth(57), // Adjust the size according to your logo's dimensions
    height: responsiveHeight(15), // Adjust the size according to your logo's dimensions
  },
  textStyle: {
    justifyContent:'space-around',
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    color: 'black'

  },
  checkbox: {
    alignSelf: 'center',
    marginLeft:responsiveWidth(5),
    
  },
  underLineView:{
    marginRight: responsiveWidth(24),
    height:responsiveHeight(1),
    borderColor:'#F6CD5B', 
    width:responsiveWidth(30),
    borderRadius:50,
    backgroundColor:'#F6CD5B',
    alignSelf:'center',
  },
  emailView:{
    marginLeft:responsiveWidth(5),
    marginTop:responsiveHeight(3),
    borderRadius:responsiveWidth(3),
    width:responsiveWidth(90), 
    height:responsiveHeight(5), 
    backgroundColor:'#EEEEE0',
    flex:1,
    position:'relative',
  },
  emilPasswordLabel:{
    marginTop:responsiveHeight(1),
    marginLeft:responsiveWidth(5),
    width:responsiveWidth(20),
    color:'black'
  },
  textInput:{
    marginLeft:responsiveWidth(4),
    width:responsiveWidth(70),
    height:responsiveHeight(5),
    color:'black'
  },
  passwordView:{
    marginLeft:responsiveWidth(5),
    marginTop:responsiveHeight(2),
    borderRadius:responsiveWidth(3), 
    width:responsiveWidth(90), 
    height:responsiveHeight(5),  
    backgroundColor:'#EEEEE0',
    flex:1,
    position:'relative',
  },
  textColor:{
    color:'black'
  },
  centerAlign:{
    alignSelf:'center'
  },
});

export default LoginScreen3;
