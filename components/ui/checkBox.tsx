import React, {memo} from "react";
import {TouchableOpacity, StyleSheet} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"

interface Props {
    isChecked: boolean;
    color: string;
    toggleIsChecked: () => void;
}

export const CheckBox = memo(({isChecked, toggleIsChecked, color}: Props) => {
    const theme = useThemeColor();
    return (
        <TouchableOpacity
            onPress={toggleIsChecked}
            activeOpacity={0.9}
            style={{
                ...styles.checkbox,
                backgroundColor: theme.translucent,
            }}
        >
            {
                !isChecked ? <></> : <Icon name="check" color={color}  size={14}/>
            }
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    checkbox: {
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 5,
        height: 24,
        width: 24,
        justifyContent: "center",
        alignItems: "center",
    },
});
