import React, {useContext} from 'react';
import {Alert, View} from 'react-native';
import {LoginSqueleton} from '../Components/components';
import {UserContext} from '../Components/hooks/user';
import styles from './styles/login';

const Login = ({navigation}: any) => {
  const userContext = useContext(UserContext);
  const {login, user} = userContext;

  const onAccept = () => {
    if (!user?.user || !user?.password) {
      return Alert.alert('No data', 'you must fill all the fields', [
        {text: 'OK'},
      ]);
    }

    if (login && !login()) {
      return Alert.alert('Error', 'User or password incorrect', [{text: 'OK'}]);
    }

    if (login && login()) {
      return Alert.alert('Success', 'You have been logged in successfully', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <LoginSqueleton login={onAccept} />
    </View>
  );
};

export default Login;
