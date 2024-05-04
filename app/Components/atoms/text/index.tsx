import React, { Children } from "react";
import { Text } from "react-native";

type TextProps = {
    children?: string;
};
const TextEditable: React.FC<TextProps> = (props) => {
    return <Text>{props.children}</Text>;
};

export default Text;