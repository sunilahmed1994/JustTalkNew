
import React, { useState, useCallback, useEffect, useContext } from 'react';
import { GiftedChat, Bubble, InputToolbar, Composer } from 'react-native-gifted-chat';
import { View,  Text, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { appStyles } from '../../../services/utilities/appstyle';
import { firebase } from '@react-native-firebase/firestore';
import ImageView from 'react-native-image-view';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { AuthContext } from '../../../navigation/authProvider';

const ChatScreen = ({navigation}) => {
  const route = useRoute();
  const [messages, setMessages] = useState([]);
  const userAvatar = route.params.userAvatar;
  const groupName = route.params.name; // Name coming from modal screen
  const sendicon = require('../../../assets/sendicon.png');
  
  const {user} = useContext(AuthContext);
  
  
  
  const chatGroupRef = firebase.firestore().collection('ChatGroups').doc(groupName);
  const backToProfile = () => {
      navigation.navigate( 'ProfileScreen' );
    }
    const renderSend = (props) => {
      return (
        <TouchableOpacity
          onPress={() => {
            if (props.text && props.text.trim().length > 0) {
              props.onSend({ text: props.text.trim() }, true);
            }
          }}
          accessibilityLabel="Send message"
          // style={{
          //   marginRight: 1,
          //   marginBottom: 1,
          // }}
        >
          <Image
            source={sendicon}
            style={{
              width: responsiveHeight(8),
              height: responsiveHeight(8),
              resizeMode: 'cover',
            }}
          />
        </TouchableOpacity>
      );
    };

    useEffect(() => {
      const unsubscribe = chatGroupRef
        .collection('Messages')
        .orderBy('createdAt','desc')
        .onSnapshot((snapshot) => {
          const loadedMessages = snapshot.docs.map((doc) => {
          const data = doc.data();
          const createdAt = typeof data.createdAt === 'number' ? data.createdAt : data.createdAt.toDate().getTime();
          return{
            ...data,
            createdAt: createdAt,
          };
        });
          setMessages(loadedMessages);
        });
  
      return () => unsubscribe();
    }, [chatGroupRef]);
  
    const onSend = useCallback((newMessages = []) => {
      const message = newMessages[0];
      
      const newMessage = {
        _id:new Date().getTime().toString(),
        text: message.text,
        createdAt: firebase.firestore.Timestamp.now(),
        user:{
          _id:user.email,
          avatar: userAvatar,
        }
      };
  
      // Use the same chatGroupRef to access the 'Messages' subcollection
      chatGroupRef.collection('Messages').add(newMessage);
  
      // Update the local messages state
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [newMessage]),
      );
    }, [chatGroupRef, user, userAvatar]);

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
            <Text style={appStyles.chatheaderTitleText}>{groupName}</Text>
          </View>
        </View>
      <View style={{flex:7}}>
      <GiftedChat 
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: user.email,
          avatar: userAvatar,
        }}
        renderBubble={(props) => {
          const isCurrentUser = props.currentMessage.user._id === user.email;
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                 
                  backgroundColor: '#FFE7A3',
                  borderRadius: responsiveWidth(5),
                },
                left: {
                  
                  backgroundColor: '#FFFFFF',
                  borderRadius: responsiveWidth(5),
                },
              }}
              textStyle={{
                right: { color: isCurrentUser ? 'black' : 'white' },
                left: { color: 'black' },
              }}
            />
          );
        }}
        renderInputToolbar={(props) => {
          return (
            <InputToolbar 
              {...props}
              containerStyle={appStyles.customInputToolBar} 
              keyboardShouldPersistTaps='never' 
              renderComposer={composerProps => (
                <Composer
                    {...composerProps}
                    textInputStyle={{
                        color: '#ffffff',

                        paddingTop: responsiveHeight(1),

                        marginBottom: responsiveHeight(0.5), // Add spacing here
                        // Add more styles as needed
                    }}
                />
            )}
              
            />
          );
        }}
        renderSend={renderSend} // Set the custom send button
      />
      </View>
    </View>
  );
};


export default ChatScreen;
