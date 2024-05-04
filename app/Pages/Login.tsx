import React from 'react';
import { View } from 'react-native';
import { LoginSqueleton } from '../Components/components';

const Login = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LoginSqueleton />
      </View>
    );
  }
  

  export default Login;