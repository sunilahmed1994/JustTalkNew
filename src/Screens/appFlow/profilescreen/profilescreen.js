
import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Modal, Image, Dimensions, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";

import ModalPopUp from '../../Modal'

const ProfileScreen = (props) => {
  // const screenWidth1 = Dimensions.get('window').width;

  const imagesWithNames = [
    { name: 'House Party', image: require('../../../assets/houseparty.png'), posterImage:require('../../../assets/partyposter.png')},
    { name: 'Friends Squad', image: require('../../../assets/friendsquad.png'),posterImage:require('../../../assets/friendsposter.png') },
    { name: 'Pineapple Party', image: require('../../../assets/pineappleparty.png'),posterImage:require('../../../assets/pineappleposter.png') },
    { name: 'Rave Room', image: require('../../../assets/raveroom.png'),posterImage:require('../../../assets/raveposter.png') },
    { name: 'Birthday Party', image: require('../../../assets/birthdayparty.png'),posterImage:require('../../../assets/birthdayposter.png') },
    { name: 'Food Club', image: require('../../../assets/foodclub.png'),posterImage:require('../../../assets/foodposter.png') },
    { name: 'Kitty Chats', image: require('../../../assets/kittychats.png'),posterImage:require('../../../assets/kittyposter.png') },
  ];
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [selectedName, setSelectedName] = useState('');
  // const [passingname, setPassingname] = useState('')
  const handleImagePress = (name, source,posterSource) => {
    setSelectedImage(source);
    setSelectedName(name);
    setSelectedPoster(posterSource);
    setModalVisible(true);
  };
  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };
  const isPointInsideCircle = (pointX, pointY, circleX, circleY, radius) => {
  const dx = Math.abs(circleX - pointX);
  const dy = Math.abs(circleY - pointY);
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance <= radius;
};
  const calculateImagePosition = (index, totalImages) => {
    const angle = (index * 360) / totalImages;
    const radius = 140; // You can adjust this value to control the radius of the circle
    const angleRad = angle * (Math.PI / 180);
    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);

    return {
      transform: [{ translateX: x }, { translateY: y }],
    };
  };
  const handleData = ({data}) =>{
  //  console.log("handle data: ", data);
    setModalVisible(data);
  }

  return (

    <ScrollView contentContainerStyle={{ flexGrow:1 }}
    keyboardShouldPersistTaps="handled" >
      <View style={{ flex: 1 }}>

        <View style={{ flex: 0.5, flexDirection: 'row' }}>
          <View style={{ flex: 0.3, backgroundColor: '#F6CD5B' }}></View>
          <View style={{ backgroundColor: '#F6CD5B', flex: 4.5, justifyContent: 'space-around' }}>
            <Image
              source={require('../../../assets/justtalkprofile.png')}
            />
          </View>

        </View>


        <View style={{ flex: 0.5 }}>
          <View style={styles.innerTextView}>
            <TouchableOpacity onPress={()=>{ setModalVisible(false)}}>
            <Text style={styles.chatText1}>
              These Chatrooms, You Bet!
            </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.innerTextView}>
            <Text style={styles.chatText2}>
              Join Any Room Now
            </Text>
          </View>
        </View>

        <View style={styles.bodyContainer}>

          <Image source={require('../../../assets/profilecenter.png')} style={styles.center} />
          <Image source={require('../../../assets/ellipse.png')} style={styles.ringStyle} />


          {imagesWithNames.map(({ name, image, posterImage }, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.imageContainer, calculateImagePosition(index, imagesWithNames.length)]}
              onPress={() => handleImagePress(name, image,posterImage)}
            >
              <Image source={image} style={styles.image} />
              <Text style={styles.imageName}>{name}</Text>
            </TouchableOpacity>
          ))}

          

        </View>

      </View>
      {isModalVisible && <ModalPopUp name={selectedName} image={selectedPoster} senddata={handleData} navigation={props.navigation} userAvatar={selectedImage} />}
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({

  bodyContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chatText1: {
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
    padding: responsiveHeight(1),
    color: 'black',
  },
  chatText2: {
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.7),
    padding: responsiveHeight(1),
    color: 'black',
  },
  innerTextView: {
    flex: 1,
    alignItems: 'center',
  },

  center: {
    zIndex: -1,
    position: 'absolute',
  },
  ringStyle: {
    position: 'absolute',
    zIndex: -1,
  },
  image: {
    borderRadius: responsiveWidth(10),

  },
  imageName: {
    color: 'black',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex:1,

  },
  

})