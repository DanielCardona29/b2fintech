import React from "react";
import { TextInput } from 'react-native-paper';

type PasswordProps = {
    label?: string;
};
const Password: React.FC<PasswordProps> = (props) => {
    const [text, setText] = React.useState<string>("");
    const [secureTextEntryShow, setSecureTextEntryShow] = React.useState<boolean>(false);

    return (
        <TextInput
            label={props.label}
            secureTextEntry={secureTextEntryShow}
            right={<TextInput.Icon icon="eye" onPress={() => setSecureTextEntryShow(!secureTextEntryShow)} />}
            onChangeText={text => setText(text)}
        />
    )
};

Password.defaultProps ={
    label: "Password"
}
export default Password;