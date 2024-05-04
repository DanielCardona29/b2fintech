import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

type TabBarIconProps = {
    focused: boolean;
    color: string;
    size: number;
    route: { name: string };
};
const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, color, size, route }) => {
    let icon
    return <Icon name={route.name} size={size} color={color} />;
}

export default TabBarIcon;