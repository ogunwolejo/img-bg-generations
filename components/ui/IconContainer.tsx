import React from "react";
import {View, Image, ImageSourcePropType, StyleSheet} from "react-native";

type Props = {
    src:  ImageSourcePropType;
    styles: object;
}
export const IconContainer = ({src, styles}: Props): React.JSX.Element => {
    return (
        <View style={{...styles, ...sty.row}}>
            <Image
                source={src}
            />
        </View>
    );
};

const sty = StyleSheet.create({
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
