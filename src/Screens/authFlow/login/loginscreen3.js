import React, { useState,useContext, useEffect } from 'react';
import { View, Text,  Image, TextInput, ScrollView, TouchableOpacity,Alert, ActivityIndicator } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { appStyles } from '../../../services/utilities/appstyle';
import { AuthContext } from '../../../navigation/authProvider';
import { firebase } from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen3 = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // Add password state
  const [existingUsers, setExistingUsers] = useState([]); // To store existing user data
  const [userExists, setUserExists] = useState(false);
 
  const [isLoading, setLoading] = useState(false); // Add isLoading state
  const {login, isLoggedIn} =  useContext(AuthContext);

  const fetchExistingUsers = async () => {
    try {
      const usersCollection = firebase.firestore().collection('users');
      const snapshot = await usersCollection.get();
      const usersData = snapshot.docs.map(doc => doc.data());
      setExistingUsers(usersData);
    } catch (error) {
      console.error('Error fetching existing users:', error);
    }
  };

  // Fetch existing users when the component mounts
  useEffect(() => {
    fetchExistingUsers();
    loadSavedCredentials();
  }, []);

  const loadSavedCredentials = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedPassword = await AsyncStorage.getItem('password');

      if (savedUsername && savedPassword) {
        setUsername(savedUsername);
        setPassword(savedPassword);
        setRememberMe(true);
      }
    } catch (error) {
      console.error('Error loading saved credentials:', error);
    }
  };
  const handleCheckUsername = async () => {
    try{
      setLoading(true); // Start loading indicator
      await login(username,password);
      if (rememberMe) {
        saveCredentialsLocally(username, password);
      }
      if (isLoggedIn) {
       navigation.navigate('appNavigation', { screen: 'ProfileScreen' });
       Alert.alert('Welcome', username);
      }
    }catch(e){
      console.log('Login Button Press',e);
    }finally {
      setLoading(false); // Stop loading indicator
    }
    
  };
  const saveCredentialsLocally = async (username, password) => {
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
    } catch (error) {
      console.error('Error saving credentials locally:', error);
    }
  };
  const handleUsernameChange = (text) => {
    setUsername(text);
    const userExists = existingUsers.some(user => user.username === text);
    
    setUserExists(userExists);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    
<ScrollView contentContainerStyle={{ flexGrow:1 }}
      keyboardShouldPersistTaps="handled"  >
      <View style={appStyles.container}>
        <View style={appStyles.headerImageView}>
          <Image
            source={require('../../../assets/justtalk.png')}
            style={appStyles.headerImage}
          />
        </View>

        <View style={appStyles.welcomeLoginView}>
          <Text style={[appStyles.welcomeTextStyle, appStyles.textfontfamily]}>Welcome To Login!</Text>
        </View>

        <View style={appStyles.underLineView} />
      </View>


      <View style={{ flex: 1}}>
        <View style={appStyles.textInputFieldMainView}>
          <Text style={appStyles.textlabel}>Email</Text>
           <View style={{flexDirection:'row'}}>
            <TextInput  style={appStyles.inputTextField} placeholder='johndoe123' onChangeText={handleUsernameChange} value={username}/>
            <TouchableOpacity>
            {userExists &&
              <Image style={appStyles.textInputImage} source={require('../../../assets/checkcircle.png')} />
              }
              </TouchableOpacity>
          </View>
        </View>

        <View style={appStyles.textInputFieldMainView}>
          <Text style={appStyles.textlabel}>Password</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput secureTextEntry={!isPasswordVisible} style={appStyles.inputTextField} placeholder='**********' onChangeText={handlePasswordChange} value={password} ></TextInput>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image style={appStyles.textInputImage} source={require('../../../assets/eye.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={appStyles.checkBoxOuterView}>
          <CheckBox value={rememberMe} onValueChange={setRememberMe} style={appStyles.checkbox} />
          <Text style={[appStyles.textColor, appStyles.centerAlign]}>Remember me</Text>
          <TouchableOpacity style={[appStyles.touchableForget,appStyles.centerAlign]} onPress={() => { navigation.navigate('appNavigation',{screen:'ForgetPasswordScreen'}) }}>
            <Text style={appStyles.textColor}>Forget Password</Text>
          </TouchableOpacity>
        </View>

        <View style={[appStyles.loginButtonView]}>
          <TouchableOpacity onPress={handleCheckUsername}>
          {isLoading ? (
            <ActivityIndicator size="small" color="white" /> // Display loading indicator
             ) : (
            <Text style={appStyles.loginButtonText}>LOG IN</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>


      <View style={{ flex: 1}}>
        <View style={{ flex: 1}}>

        </View>
        <View style={{ flex: 1 }}>
          <Text style={[appStyles.dontHaveAccountText,appStyles.textColor,appStyles.centerAlign]}>Don't have an account?</Text>
          <View style={appStyles.createAccountView}>
            <TouchableOpacity onPress={() => { navigation.navigate('SignUpScreen') }}>
              <Text style={[appStyles.textColor, appStyles.centerAlign, appStyles.topPadding]}>
                CREATE AN ACCOUNT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
</ScrollView>

    
  );
};



export default LoginScreen3;
