import React , { Alert, createContext , useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isLoggedIn,
                login: async(email,password)=>{
                    try{
                        console.log ('logging in');
                      await auth().signInWithEmailAndPassword(email,password).then(()=>{
                        setIsLoggedIn(true);
                      });
                    }catch(e){
                        console.log("error", e);
                    }
                },
                register: async(email,password)=>{
                    try{
                        console.log("registration method called");
                      await auth().createUserWithEmailAndPassword(email,password);
                    }catch(e){
                        console.log('Error:', e);
                    }
                },
                logout: async()=>{
                    try{
                      await auth().signOut();
                      setIsLoggedIn(false);
                    }catch(e){
                        Alert.Alert("error", e);
                    }
                },
            }}
        >
            {children}
        </AuthContext.Provider>  
    );
}