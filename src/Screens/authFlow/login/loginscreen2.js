import React, {useEffect} from 'react';
import { View, Text,  Image } from 'react-native';
import { appStyles } from '../../../services/utilities/appstyle';

const LoginScreen2 = ({navigation}) => {
    useEffect(() => {
        // Navigate to the login screen after 5 seconds
        const timer = setTimeout(() => {
          navigation.navigate('LoginScreen3');
        }, 1000); // 1 seconds
    
        // Clear the timer when the component is unmounted
        return () => clearTimeout(timer);
      }, [navigation]);
  return (

    <View styles={appStyles.container}>

      <View>
        <Image
          source={require('../../../assets/justtalk.png')}
          style={appStyles.headerImage}
        />
      </View>

      <View>
        <Text style={[appStyles.logintextStyle,appStyles.textfontfamily]}>Welcome To Login!</Text>
      </View>

      <View style={appStyles.underLineView}/>
      </View>


  );
};

export default LoginScreen2;
