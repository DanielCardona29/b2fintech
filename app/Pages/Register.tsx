import React from 'react';
import { View, Text } from 'react-native';
import RegisterSqueleton from '../Components/components/register';

const Register = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <RegisterSqueleton />
      </View>
    );
  }
  

  export default Register;