import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Modal from "react-native-modal";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const ForgetPasswordScreen = ({navigation}) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    
  return (

    <View styles={styles.container}>

      <View>
        <Text style={styles.textStyle}>Enter your email to reset your password</Text>
      </View>

      <View style={styles.emailLabelView}>
              <Text style={styles.emailLabel}>Email</Text>
              <TextInput style={styles.inputText} placeholder='johndoe@email.com'></TextInput>
      </View>

      <View style={styles.mainModalView}>
            <TouchableOpacity onPress={toggleModal}><Text style={styles.passLinkSetText}>SEND PASSWORD RESET LINK</Text></TouchableOpacity>
      <Modal 
      isVisible={isModalVisible} 
      onBackdropPress={toggleModal} 
      onBackButtonPress={toggleModal} 
      backdropOpacity={0.7} style={{justifyContent:'flex-end', margin:0,}}
      swipeDirection={['down']}
      onSwipeComplete={toggleModal}
     
      >
           <View style={styles.viewInModal}>
                <Image style={{alignSelf:'center', marginTop:40}} source={require('../assets/checkcircle.png')}/>
                <Text style={styles.resetText}>Password Reset Link Sent To Your Email</Text>
                    <View style={styles.continueButtonView}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('LoginScreen3')}}><Text style={styles.passLinkSetText}>CONTINUE</Text></TouchableOpacity>
                    </View>
            </View> 
      </Modal>
      </View>

    </View>


  );
};



const styles = StyleSheet.create({
  continueButtonView:{
    marginTop:responsiveHeight(6), 
    borderRadius:responsiveHeight(5), 
    width:responsiveWidth(70), 
    height:responsiveHeight(8), 
    backgroundColor:'black', 
    alignSelf:'center'
  },
  viewInModal:{
    height:responsiveHeight(50), 
    backgroundColor:'white', 
    borderTopLeftRadius:responsiveWidth(15),
    borderTopRightRadius:responsiveWidth(15),
  },
  passLinkSetText:{
    color:'white', 
    alignSelf:'center', 
    paddingTop:responsiveHeight(2),
  },
  mainModalView:{
    marginTop:responsiveHeight(4), 
    borderRadius:responsiveWidth(10), 
    width:responsiveWidth(70), 
    height:responsiveHeight(8),  
    backgroundColor:'black', 
    alignSelf:'center',
  },
  inputText:{
    marginLeft:responsiveWidth(4),
    width:responsiveWidth(70),
    color:'black',
  },
  emailLabel:{
    marginTop:responsiveHeight(1),
    marginLeft:responsiveWidth(4),
    width:responsiveWidth(30),
    color:'black'
  },
  container: {
    flex: 1,
  },
  emailLabelView:{
    marginLeft:responsiveWidth(5),
    marginTop:responsiveHeight(3),
    borderRadius:responsiveWidth(3),
    width:responsiveWidth(90), 
    height:responsiveHeight(10), 
    backgroundColor:'#EEEEE0',
  },
  textStyle: {
    
    marginLeft: responsiveWidth(10),
    marginRight: responsiveWidth(10),
    marginTop: responsiveHeight(4),
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3.3),
    textAlign: 'center',
    color: 'black'

  },
  resetText:{
    marginTop: responsiveHeight(8),
    marginLeft: responsiveWidth(12),
    marginRight: responsiveWidth(12),
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    color: 'black', 
  },
});

export default ForgetPasswordScreen;
