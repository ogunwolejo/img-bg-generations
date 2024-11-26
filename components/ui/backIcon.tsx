import React, {memo} from "react";
import {useThemeColor} from "@/hooks/useThemeColor";
import {StyleSheet, TouchableOpacity} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {Router} from "expo-router";

type Props = {
    navigation: Router;
}

export const BackIcon = memo(({navigation}: Props) => {
    const theme = useThemeColor();
    return (
        <TouchableOpacity onPress={() => navigation.back()} style={styles.back_icon}>
            <Icon name="arrow-left"  size={25} color={theme.black}/>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    back_icon: {
        marginTop: 12,
        marginBottom: 15,
        paddingLeft:20,
    },
});
