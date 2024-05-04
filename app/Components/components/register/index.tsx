import React from "react";

import Password from "../../molecules/password";
import Input from "../../molecules/inputText";
import { View } from "react-native";

import { LoginStyles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native-paper";
import parametriceText from "../../../parametrice/es";

type LoginProps = {
    children?: string;
};
const RegisterSqueleton: React.FC<LoginProps> = (props) => {
    return (
        <SafeAreaView style={LoginStyles.safeArea}>
            <Text style={LoginStyles.textBold}>{parametriceText.signin}</Text>
            <View style={LoginStyles.container}>
                <Input />
                <Password />
                <Password label={parametriceText.confirmPassword} />
            </View>
            <Button icon="arrow-right" mode="outlined" onPress={() => console.log('Pressed')}>{parametriceText.accept}</Button>
        </SafeAreaView>
    )
};


export default RegisterSqueleton;