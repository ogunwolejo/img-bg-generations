import React, {memo, useRef, useState} from "react";
import {View, TextInput, StyleSheet, TextInputProps} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";

type Props = {
    boxDigits?: number
} & TextInputProps

export const OtpInput = memo(({boxDigits, ...props}: Props) => {
    const theme = useThemeColor();
    const [digits, setDigits] = useState<Array<string>>(Array(boxDigits ?? 4).fill(""));
    const inputsRef = useRef<TextInput[]>([]);
    const handleInput = (val: string, index: number) => {
        const newOpt = [...digits]
        newOpt[index] = val
        setDigits(newOpt);

        if (val && index < boxDigits - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    }

    return (
        <View style={styles.wrapper}>
            {digits.map((digit, idx: number) => (
                <View key={idx}>
                    <TextInput
                        style={{
                            ...styles.input,
                            backgroundColor: theme.translucent,
                            color: theme.text1,
                        }}
                        placeholderTextColor={theme.inputPlaceholder}
                        maxLength={1}
                        keyboardType="numeric"
                        secureTextEntry={false}
                        value={digit}
                        onChangeText={(text: string) => handleInput(text, idx)}
                        onKeyPress={
                            ({ nativeEvent }) => {
                                if (nativeEvent.key === "Backspace" && idx > 0 && !digit) {
                                    inputsRef.current[idx - 1]?.focus();
                                }
                            }
                        }
                        ref={(el) => (inputsRef.current[idx] = el!)}
                    />
                </View>
            ))}
        </View>
    )
})


const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: 8,
    },
    input:{
        borderRadius: 10,
        width: 60,
        height: 60,
        paddingHorizontal: 20,
        fontFamily: "PoppinsRegular",
        fontSize: 16,
        fontWeight: "regular",
        textAlign: "center"
    },
    icon_wrapper: {},
});
