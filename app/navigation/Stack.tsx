import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './router';

const StackNavigate: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default StackNavigate;
