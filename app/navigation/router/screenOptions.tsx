import React from "react";
import TabBarIcon from "./tabBarIcon";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";


type TabBarIconProps = {
    focused: boolean;
    color: string;
    size: number;
};

const ScreenOptions = ({ route }: any): BottomTabNavigationOptions => ({
    tabBarIcon: (props: TabBarIconProps) => TabBarIcon({ ...props, route }),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
})

export default ScreenOptions;