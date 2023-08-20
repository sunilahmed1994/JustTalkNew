
import React, { useState } from 'react'
import {  Text, View, ScrollView,  Image,  TouchableOpacity, Alert } from 'react-native'
import ModalPopUp from '../../Modal'
import { appStyles } from '../../../services/utilities/appstyle';

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
      <View style={appStyles.container}>

        <View style={appStyles.profileHeaderView1}>
          <View style={appStyles.profileHeaderView2}></View>
          <View style={appStyles.profileHeaderImageView}>
            <Image
              source={require('../../../assets/justtalkprofile.png')}
            />
          </View>

        </View>


        <View style={{ flex: 0.5 }}>
          <View style={appStyles.innerTextView}>
            <TouchableOpacity onPress={()=>{ setModalVisible(false)}}>
            <Text style={[appStyles.chatText, appStyles.profilescrchat1font]}>
              These Chatrooms, You Bet!
            </Text>
            </TouchableOpacity>
          </View>

          <View style={appStyles.innerTextView}>
            <Text style={[appStyles.chatText, appStyles.profilescrchat2font]}>
              Join Any Room Now
            </Text>
          </View>
        </View>

        <View style={appStyles.profilebodyContainer}>

          <Image source={require('../../../assets/profilecenter.png')} style={appStyles.profilecenterimage} />
          <Image source={require('../../../assets/ellipse.png')} style={appStyles.ringimage} />


          {imagesWithNames.map(({ name, image, posterImage }, index) => (
            <TouchableOpacity
              key={index}
              style={[appStyles.profileImagesContainer, calculateImagePosition(index, imagesWithNames.length)]}
              onPress={() => handleImagePress(name, image,posterImage)}
            >
              <Image source={image} style={appStyles.imageradius} />
              <Text style={appStyles.imageNameColor}>{name}</Text>
            </TouchableOpacity>
          ))}

          

        </View>

      </View>
      {isModalVisible && <ModalPopUp name={selectedName} image={selectedPoster} senddata={handleData} navigation={props.navigation} userAvatar={selectedImage} />}
    </ScrollView>
  )
}

export default ProfileScreen;

