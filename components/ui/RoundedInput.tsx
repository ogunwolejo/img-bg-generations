import React, {memo} from "react";
import {TextInput, StyleSheet, View, TextInputProps} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";

export const RoundedInput = memo((props: TextInputProps): React.JSX.Element => {
    const theme = useThemeColor();
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={{
                    ...styles.input,
                    backgroundColor: theme.translucent,
                    color: theme.text1,
                }}
                placeholderTextColor={theme.inputPlaceholder}
                {...props}
            />
        </View>
    );
});


const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
    },
    input:{
        borderRadius: 10,
        width: "100%",
        height: 60,
        paddingHorizontal: 20,
        fontFamily: "PoppinsRegular",
        fontSize: 16,
        fontWeight: "regular",
    },
    icon_wrapper: {},
});
