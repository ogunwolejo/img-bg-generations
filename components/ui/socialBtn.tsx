import React from "react";
import {ImageSourcePropType, StyleSheet} from "react-native";
import {Text, TouchableOpacity, Image} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";
type Props = {
    icon: ImageSourcePropType;
    text: string;
    onPress: ((arg? : any) => void)
}
export const SocialBtn = ({text, icon, onPress}: Props): React.JSX.Element => {
    const theme = useThemeColor();
    return (
        <TouchableOpacity onPress={onPress}  style={{...styles.btn, backgroundColor: theme.translucent}}>
            <Image source={icon}/>
            <Text style={{...styles.socialName, color: theme.houseGray}}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
        borderRadius: 8,
        width: 163,
        height: 56,
        padding: 10,
    },
    socialName: {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "PoppinsMedium",
    },
});
