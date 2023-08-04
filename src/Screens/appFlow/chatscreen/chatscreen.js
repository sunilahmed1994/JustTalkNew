
import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat,Bubble, InputToolbar } from 'react-native-gifted-chat';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ImageView from 'react-native-image-view';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


const ChatScreen = () => {
  const route = useRoute();
  const [messages, setMessages] = useState([]);
  
  const userAvatar = route.params.userAvatar;

  const GiftedChatHeaderImage = () => {
    return (
      <ImageView
        source={{userAvatar}}
        style={{ width: 150, height: 150 }}
        resizeMode="cover"
      />
    );
  };

  useEffect(() => {
   
    setMessages([
      {
        
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: userAvatar, // Use the imported avatar image
        },
      },
    ]);
    
  }, [userAvatar]);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        renderHeader={() => <GiftedChatHeaderImage />}
        user={{
          _id: 1,
         avatar: userAvatar, // Use the imported avatar image
        }}
        renderBubble={(props)=>{
              return(
                <Bubble
                {...props}
                
                wrapperStyle={{
                  right:{
                    backgroundColor:'yellow',
                    borderRadius:responsiveWidth(5),
                  },
                  left:{
                    backgroundColor:'green',
                    borderRadius:responsiveWidth(5),
                  }
                  
                }}
                />
              )
        }}    
        renderInputToolbar={(props)=>{
          return(
            <InputToolbar 
            {...props}
            containerStyle={{backgroundColor:'yellow',borderRadius:responsiveWidth(10)}}
            
            />
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  headerTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  // Define your custom chat styles here
});

export default ChatScreen;
