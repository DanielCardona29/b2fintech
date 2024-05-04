import React from "react";
import { TextInput } from 'react-native-paper';

type InputProps = {
    label?: string;

};
const Input: React.FC<InputProps> = (props) => {
    const [text, setText] = React.useState("");

    return (
        <TextInput
            label={props.label}
            value={text}
            right={text ? <TextInput.Icon icon="delete" onPress={() => setText("")} /> : undefined} 
            onChangeText={text => setText(text)}
        />
    )
};

Input.defaultProps = {
    label: "user"
}

export default Input;