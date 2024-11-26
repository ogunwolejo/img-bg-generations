import React from "react";
import {View} from "react-native";

type Props = {
    length: number;
    bg?: string;
    height?: number;
}

export const Dash = ({bg, length, height = 1}: Props): React.JSX.Element => {
    return (
        <View
            style={{
                width: length,
                backgroundColor: !bg ? "white" : bg,
                height: height,
                borderRadius: 2,
            }}
        ></View>
    );
};
