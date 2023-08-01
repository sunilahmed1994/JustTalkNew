import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
// import Modal from "react-native-modal";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";



const ModalPopUp = (props) => {

  const [isModalVisible, setModalVisible] = useState(true);
  const { navigation, image, name, members, senddata } = props;

  const chatScreenNav = () => {

    navigation.navigate('ChatScreen');
    // console.log("sending data", navigation);
    senddata(false);  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (

    <View styles={styles.container}>


      <Modal
        visible={isModalVisible}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        backdropOpacity={0.7} 
        style={{ justifyContent: 'flex-end'}}
        swipeDirection={['down']}
        onSwipeComplete={toggleModal}
       

      >
        <View style={styles.viewInModal}>
          <Image style={{ alignSelf: 'center', marginTop: responsiveHeight(4) }} source={image} />
          <Text style={styles.nameText}>{name}</Text>
          <View style={styles.continueButtonView}>
            <TouchableOpacity onPress={() => { chatScreenNav(); setModalVisible(false); }}><Text style={styles.continueButtonText}>CONTINUE</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>


  );
};



const styles = StyleSheet.create({
  continueButtonView: {
    marginTop: responsiveHeight(3), 
    borderRadius: responsiveWidth(10), 
    width: responsiveWidth(65), 
    height: responsiveHeight(7), 
    backgroundColor: 'black', 
    alignSelf: 'center'
  },
  viewInModal: {
    marginVertical:responsiveHeight(45),
    justifyContent: 'flex-end',
  
    height: responsiveHeight(50),  
    borderTopLeftRadius: responsiveWidth(15), 
    borderTopRightRadius: responsiveWidth(15),
  },
  continueButtonText: {
    color: 'white', alignSelf: 'center', paddingTop: responsiveHeight(2),
  },
  
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  
 
  nameText: {
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(10),
    marginRight: responsiveWidth(10),
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
    color: 'black'
  },
});

export default ModalPopUp;
