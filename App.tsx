import { View, Text } from 'react-native'
import React from 'react'
import Root from './src/navigation/root'
import { AuthProvider } from './src/navigation/authProvider'
import AuthNavigation from './src/navigation/authNavigation/authNavigation'
const App = () => {
  return (
    <AuthProvider >
        <Root />
    </AuthProvider>
  )
}

export default App