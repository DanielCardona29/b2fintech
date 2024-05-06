import React from "react";

import Password from "../../molecules/password";
import Input from "../../molecules/inputText";
import { View } from "react-native";

import { LoginStyles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native-paper";
import parametriceText from "../../../parametrice/en";
import { UserContext } from "../../hooks/user";

type LoginProps = {
    children?: string;
    login?: () => void;
};
const LoginSqueleton: React.FC<LoginProps> = (props) => {
    const { login } = props;

    const { user, setUser } = React.useContext(UserContext);

    const onUserChange = (text: string) => {
        if (setUser) {
            setUser({ ...user, user: text });
        }
    };

    const onPasswordChange = (text: string) => {
        if (setUser) {
            setUser({ ...user, password: text });
        }
    }

    
    return (
        <SafeAreaView style={LoginStyles.safeArea}>
            <Text style={LoginStyles.textBold}>{parametriceText.login}</Text>
            <View style={LoginStyles.container}>
                <Input onChange={onUserChange}  value={user?.user}/>
                <Password onChange={onPasswordChange}  value={user?.password} />
            </View>
            <Button icon="arrow-right" mode="contained" onPress={login}>{parametriceText.accept}</Button>
        </SafeAreaView>
    )
};


export default LoginSqueleton;