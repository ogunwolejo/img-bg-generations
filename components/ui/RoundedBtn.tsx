import React, {memo} from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";

type Prop = {
    handler: () => void;
    title: string;
};
export const RoundedBtn = memo(({handler, title}: Prop) => {
    const theme = useThemeColor();
    return (
        <TouchableOpacity onPress={handler}>
            <View style={{...styles.btn, backgroundColor: theme.primary}}>
                <Text style={{...styles.txt, color: theme.white}}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    btn: {
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 14,
    },
    txt: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "medium",
        fontFamily: "PoppinsMedium",
    },
});
