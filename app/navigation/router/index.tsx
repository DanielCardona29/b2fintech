import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Page from '../../Pages';
import ScreenOptions from './screenOptions';

const Tab = createBottomTabNavigator();

const RootTab: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={ScreenOptions}>
      <Tab.Screen
        name="Home"
        component={Page.Home}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Login"
        component={Page.Login}
        options={{tabBarLabel: 'Login'}}
      />
      <Tab.Screen
        name="Register"
        component={Page.Register}
        options={{tabBarLabel: 'Register'}}
      />
    </Tab.Navigator>
  );
};

export default RootTab;
