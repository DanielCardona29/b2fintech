import React from "react";
import { TextInput } from 'react-native-paper';

type PasswordProps = {
    label?: string;
    value?: string;
    onChange: (text: string) => void;
};
const Password: React.FC<PasswordProps> = (props) => {
    const { onChange, value} = props;
    const [secureTextEntryShow, setSecureTextEntryShow] = React.useState<boolean>(true);

    return (
        <TextInput
            label={props.label}
            secureTextEntry={secureTextEntryShow}
            right={<TextInput.Icon icon="eye" onPress={() => setSecureTextEntryShow(!secureTextEntryShow)} />}
            value={value}
            onChangeText={text => onChange(text)}
        />
    )
};

Password.defaultProps ={
    label: "Password"
}
export default Password;