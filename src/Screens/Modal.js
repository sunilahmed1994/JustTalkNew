import React, { useState } from 'react';
import { View, Text,  TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import { appStyles } from '../services/utilities/appstyle';



const ModalPopUp = (props) => {

  const [isModalVisible, setModalVisible] = useState(true);
  const { navigation, image, name, members, senddata, userAvatar } = props;

  const chatScreenNav = () => {
    
    navigation.navigate('ChatScreen',{userAvatar, name});
    // console.log('user avatar: ', userAvatar,name);
    
    senddata(false);  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (

    <View styles={[appStyles.container,appStyles.flexEnd]}>


      <Modal
        visible={isModalVisible}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        backdropOpacity={0.7} 
        style={{ justifyContent: 'flex-end'}}
        swipeDirection={['down']}
        onSwipeComplete={toggleModal}
       

      >
        <View style={appStyles.viewInModalcomp}>
          <Image style={appStyles.modalImageStyle} source={image} />
          <Text style={[appStyles.nameModalText,appStyles.textfontfamily]}>{name}</Text>
          <View style={[appStyles.continueButtonViewModal,appStyles.centerAlign]}>
            <TouchableOpacity onPress={() => { chatScreenNav(); setModalVisible(false); }}><Text style={appStyles.continueButtonTextModal}>CONTINUE</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>


  );
};





export default ModalPopUp;
