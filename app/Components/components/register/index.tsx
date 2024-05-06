import React from 'react';

import Password from '../../molecules/password';
import Input from '../../molecules/inputText';
import {Alert, View} from 'react-native';

import {LoginStyles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native-paper';
import parametriceText from '../../../parametrice/en';
import {UserContext} from '../../hooks/user';

type LoginProps = {
  children?: string;
};
const RegisterSqueleton: React.FC<LoginProps> = () => {
  const {userArray, setUserArray, consultStorage} =
    React.useContext(UserContext);

  //Local values
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const validatePassword = (
    passwordToValidate: string,
    confirmPasswordToValidate: string,
  ) => {
    return passwordToValidate === confirmPasswordToValidate;
  };

  const onResgister = () => {
    let usersArray = userArray ? userArray : [];

    //Validate data
    if (!user || !password || !confirmPassword) {
      return Alert.alert('No data', 'you must fill all the fields', [
        {text: 'OK'},
      ]);
    }

    //Validate password
    if (!validatePassword(password, confirmPassword)) {
      return Alert.alert('Password error', 'Passwords do not match', [
        {text: 'OK'},
      ]);
    }

    if (consultStorage && consultStorage(user, password)) {
      return Alert.alert('User exists', 'The user already exists', [
        {text: 'OK'},
      ]);
    }

    if (setUserArray) {
      setUserArray([...usersArray, {user, password}]);
      return Alert.alert('Success', 'You have been registered successfully', [
        {text: 'OK'},
      ]);
    }
  };

  return (
    <SafeAreaView style={LoginStyles.safeArea}>
      <Text style={LoginStyles.textBold}>{parametriceText.signin}</Text>
      <View style={LoginStyles.container}>
        <Input onChange={e => setUser(e)} value={user} />
        <Password onChange={e => setPassword(e)} value={password} />
        <Password
          onChange={e => setConfirmPassword(e)}
          value={confirmPassword}
          label={parametriceText.confirmPassword}
        />
      </View>
      <Button icon="arrow-right" mode="contained" onPress={onResgister}>
        {parametriceText.accept}
      </Button>
    </SafeAreaView>
  );
};

export default RegisterSqueleton;
