
import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import { View,  Text, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { appStyles } from '../../../services/utilities/appstyle';
import ImageView from 'react-native-image-view';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const ChatScreen = ({navigation}) => {
  const route = useRoute();
  const [messages, setMessages] = useState([]);
  const userAvatar = route.params.userAvatar;
  const userName = route.params.name; // Name coming from modal screen

  const backToProfile = () => {
      navigation.navigate( 'ProfileScreen' );
    }
  

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: userAvatar,
        },
      },
    ]);
  }, [userAvatar]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
        <View style={appStyles.chatheaderContainer}>
          <View style={{flex:0.3}}>
            <TouchableOpacity onPress={backToProfile}>
              <Image
                source= {require( '../../../assets/backarrow.png' )} // Use the imported avatar image
              />
            </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
            <Image
              source={ userAvatar } // Use the imported avatar image
            />
          </View>
          <View style={{flex:3, height:responsiveHeight(9)}}>
            <Text style={appStyles.chatheaderTitleText}>{userName}</Text>
          </View>
        </View>
      <View style={{flex:7}}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
          avatar: userAvatar,
        }}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: 'yellow',
                  borderRadius: responsiveWidth(5),
                },
                left: {
                  backgroundColor: 'green',
                  borderRadius: responsiveWidth(5),
                },
              }}
            />
          );
        }}
        renderInputToolbar={(props) => {
          return (
            <InputToolbar
              {...props}
              containerStyle={{
                backgroundColor: 'yellow',
                borderRadius: responsiveWidth(10),
              }}
            />
          );
        }}
      />
      </View>
    </View>
  );
};


export default ChatScreen;
