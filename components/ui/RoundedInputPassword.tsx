import React, {memo} from "react";
import {TextInput, StyleSheet, View, TextInputProps, TouchableWithoutFeedback} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

type Props = {
    toggleIcon: () => void;
} & TextInputProps;

export const RoundedInputPassword = memo((props: Props): React.JSX.Element => {
    const theme = useThemeColor();
    return (
        <View style={{...styles.wrapper, backgroundColor: theme.translucent}}>
            <TextInput
                style={{
                    ...styles.input,
                    color: theme.text1,
                }}
                placeholderTextColor={theme.inputPlaceholder}
                {...props}
            />
            <TouchableWithoutFeedback onPress={props.toggleIcon}>
                <Icon name={!props.secureTextEntry ? "eye-outline" : "eye-off-outline"} size={25} color={theme.text1}/>
            </TouchableWithoutFeedback>
        </View>
    );
});


const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 8,
    },
    input:{
        borderRadius: 10,
        width: "80%",
        height: 60,
        paddingHorizontal: 20,
        fontFamily: "PoppinsRegular",
        fontSize: 16,
        fontWeight: "regular",
    },
    icon_wrapper: {},
});
