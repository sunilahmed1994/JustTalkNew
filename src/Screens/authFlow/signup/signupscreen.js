import React, { useState, useContext , useEffect} from 'react';
import { View, Text,  Image, TextInput, ScrollView,  TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { appStyles } from '../../../services/utilities/appstyle';
import { AuthContext } from '../../../navigation/authProvider';
import { firebase } from '@react-native-firebase/firestore';


const SignUpScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const {register} =  useContext(AuthContext);
  const [userExists, setUserExists] = useState(false);
  const [existingUsers, setExistingUsers] = useState([]); // To store existing user data
  
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
  }, []);


  const handleCheckUsername = () => {
    // Validate username and password against existing users
    const user = existingUsers.find(user => user.username === username);

    if (user) {
      // Username already exists
      Alert.alert('Error', 'Username already exists');
    } else if (password !== confirmPassword) {
      // Passwords do not match
      Alert.alert('Error', 'Passwords do not match');
    } else {
      // Register user and navigate
      register(username, password);
      navigation.navigate('appNavigation', { screen: 'ProfileScreen' });
    }
  };
    
    
 

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };
  const handleUsernameChange = (text) => {
    setUsername(text);
    // Check if the input username exists in existingUsers
    const userExists = existingUsers.some(user => user.username === text);
    setUserExists(userExists);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
  };
  return (

    <ScrollView contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled">

      <View style={appStyles.container}>
        <View>
          <Image
            source={require('../../../assets/justtalk.png')}
            style={appStyles.headerImage}
          />
        </View>

        <View>
          <Text style={[appStyles.welcomesignuptext,appStyles.textfontfamily]}>Welcome To SignUp!</Text>
        </View>
        <View style={appStyles.underLineView} />
      </View>


      <View style={{ flex: 2 }}>
        <View style={appStyles.textInputFieldMainView}>
          <Text style={appStyles.textlabel}>Username</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput style={appStyles.inputTextField} placeholder='johndoe123' onChangeText={handleUsernameChange} value={username}/>
            <TouchableOpacity>
            

            { userExists &&
              <Image style={appStyles.textInputImage} source={require('../../../assets/checkcircle.png')} />
            }
              </TouchableOpacity>
          </View>
        </View>


        <View style={appStyles.textInputFieldMainView}>
          <Text style={appStyles.textlabel}>Password</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput secureTextEntry={!isPasswordVisible} style={appStyles.inputTextField} placeholder='**********' onChangeText={handlePasswordChange} value={password}></TextInput>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image style={appStyles.textInputImage} source={require('../../../assets/eye.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={appStyles.textInputFieldMainView}>
          <Text style={appStyles.textlabel}>Confirm Password</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput secureTextEntry={!isConfirmPasswordVisible} style={appStyles.inputTextField} placeholder='**********' onChangeText={handleConfirmPasswordChange} value={confirmPassword}></TextInput>
            <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
              <Image style={appStyles.textInputImage} source={require('../../../assets/eye.png')} />
            </TouchableOpacity>
          </View>
        </View>


        <View style={{ flexDirection: 'row' }}>
          <CheckBox value={isSelected} onValueChange={setSelection} style={appStyles.checkbox} />
          <Text style={[appStyles.centerAlign, appStyles.textColor]}>Accept T&C, Privacy Policy</Text>
        </View>

        <View style={appStyles.blackButtonView}>
          <TouchableOpacity onPress={handleCheckUsername}><Text style={[appStyles.colorWhite, appStyles.centerAlign, appStyles.topPadding]}>SIGNUP</Text></TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 2 }}>
        <View>
          <Text style={[appStyles.dontHaveAccountText, appStyles.textColor, appStyles.centerAlign]}>Already have an account?</Text>
          <View style={appStyles.createAccountView}>
            <TouchableOpacity onPress={() => { navigation.navigate('LoginScreen3') }}>
              <Text style={[appStyles.centerAlign, appStyles.textColor, appStyles.topPadding]}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>


  );
};



export default SignUpScreen;
