import TabBarIcon from './tabBarIcon';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const ScreenOptions = ({route}: any): BottomTabNavigationOptions => ({
  tabBarIcon: (props: TabBarIconProps) => TabBarIcon({...props, route}),
  tabBarActiveTintColor: '#7cccc1',
  tabBarInactiveTintColor: '#dfdfdf',
  tabBarVisibilityAnimationConfig: {
    show: {
      animation: 'timing',
      config: {
        duration: 100,
      },
    },
    hide: {
      animation: 'timing',
      config: {
        duration: 100,
      },
    },
  },
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#231f20',
    borderTopWidth: 0,
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default ScreenOptions;
