import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

type TabBarIconProps = {
  color: string;
  size: number;
  route: {name: string};
  focused?: boolean;
};
const TabBarIcon: React.FC<TabBarIconProps> = props => {
  const {color, size, route} = props;
  let icon;
  switch (route.name) {
    case 'Home':
      icon = 'home';
      break;
    case 'Login':
      icon = 'login';
      break;
    case 'Register':
      icon = 'pluscircleo';
      break;
    default:
      icon = 'home';
      break;
  }
  return <Icon name={icon} size={size} color={color} />;
};

export default TabBarIcon;
