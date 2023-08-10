import React, { useState } from 'react';
import { View, Text,  Image, TextInput, ScrollView, TouchableOpacity,Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { appStyles } from '../../../services/utilities/appstyle';


const LoginScreen3 = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // Add password state
  const existingUsername = 'johndoe123'; // Replace with your existing username
  const existingPassword = 'password123'; // Replace with your existing password

  const handleCheckUsername = () => {
    if (username === existingUsername && password === existingPassword) {
      // Both username and password match, navigate to profile screen
      navigation.navigate('appNavigation', { screen: 'ProfileScreen' });
    } else if (username === existingUsername && password !== existingPassword) {
      // Username matches, but password doesn't match, show error message
      Alert.alert('Error', 'Your password does not match');
    } else {
      // Username does not match, show error message
      Alert.alert('Error', 'Your username does not match');
    }
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
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
            {username === existingUsername && (
              <Image style={appStyles.textInputImage} source={require('../../../assets/checkcircle.png')} />
              )}
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
          <CheckBox value={isSelected} onValueChange={setSelection} style={appStyles.checkbox} />
          <Text style={[appStyles.textColor, appStyles.centerAlign]}>Remember me</Text>
          <TouchableOpacity style={[appStyles.touchableForget,appStyles.centerAlign]} onPress={() => { navigation.navigate('appNavigation',{screen:'ForgetPasswordScreen'}) }}>
            <Text style={appStyles.textColor}>Forget Password</Text>
          </TouchableOpacity>
        </View>

        <View style={[appStyles.loginButtonView]}>
          <TouchableOpacity onPress={handleCheckUsername}><Text style={appStyles.loginButtonText}>LOG IN</Text></TouchableOpacity>
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
