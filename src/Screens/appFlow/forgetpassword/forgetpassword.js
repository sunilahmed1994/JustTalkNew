import React, { useState } from 'react';
import { View, Text,  TextInput, TouchableOpacity, Image } from 'react-native';
import Modal from "react-native-modal";
import { appStyles } from '../../../services/utilities/appstyle';


const ForgetPasswordScreen = ({ navigation }) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (

    <View style={appStyles.container}>

      <View>
        <Text style={[appStyles.forgetscreentextstyle,appStyles.textfontfamily]}>Enter your email to reset your password</Text>
      </View>

      <View style={appStyles.forgetscreenemailLabelView}>
        <Text style={appStyles.textlabel}>Email</Text>
        <TextInput style={appStyles.inputTextField} placeholder='johndoe@email.com'></TextInput>
      </View>

      <View style={appStyles.mainModalView}>
        <TouchableOpacity onPress={toggleModal}><Text style={appStyles.passLinkSetText}>SEND PASSWORD RESET LINK</Text></TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          onBackButtonPress={toggleModal}
          backdropOpacity={0.7} style={{ justifyContent: 'flex-end', margin: 0, }}
          swipeDirection={['down']}
          onSwipeComplete={toggleModal}

        >
          <View style={appStyles.viewInModal}>
            <Image style={appStyles.forgetpassmodalpic} source={require('../../../assets/checkcircle.png')} />
            <Text style={[appStyles.resettextinmodal,appStyles.textfontfamily]}>Password Reset Link Sent To Your Email</Text>
            <View style={appStyles.blackButtonView}>
              <TouchableOpacity onPress={() => { navigation.navigate('authNavigation', { screen: 'LoginScreen3' }) }}><Text style={appStyles.passLinkSetText}>CONTINUE</Text></TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

    </View>


  );
};


export default ForgetPasswordScreen;
