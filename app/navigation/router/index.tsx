import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Page from '../../Pages';
import Icon from 'react-native-vector-icons/AntDesign';
import ScreenOptions from './screenOptions';

const Tab = createBottomTabNavigator();

const RootTab: React.FC = () => {
  return (
    <Tab.Navigator
    screenOptions={ScreenOptions}
    >
      <Tab.Screen name="Login" component={Page.Home}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => <Icon name="login" color={"FFF"} size={size} />,
        }} />
    </Tab.Navigator>
  );
}

export default RootTab;

