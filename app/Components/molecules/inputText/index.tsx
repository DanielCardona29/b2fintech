import React from "react";
import { TextInput } from 'react-native-paper';
import parametriceText from "../../../parametrice/en";

type InputProps = {
    label?: string;
    onChange: (text: string) => void;
    value?: string;
};
const Input: React.FC<InputProps> = (props) => {
    const { value, onChange } = props;

    return (
        <TextInput
            label={props.label}
            value={value}
            right={value ? <TextInput.Icon icon="close" onPress={() => onChange("")} /> : null}
            onChangeText={text => onChange(text)}
        />
    )
};

Input.defaultProps = {
    label: parametriceText.user
}

export default Input;