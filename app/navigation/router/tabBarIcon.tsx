import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

type TabBarIconProps = {
    focused: boolean;
    color: string;
    size: number;
    route: { name: string };
};
const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, color, size, route }) => {
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
}

export default TabBarIcon;