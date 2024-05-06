import React from 'react';
import {View} from 'react-native';
import RegisterSqueleton from '../Components/components/register';
import styles from './styles/register';

const Register = () => {
  return (
    <View style={styles.container}>
      <RegisterSqueleton />
    </View>
  );
};

export default Register;
