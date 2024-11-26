import React, {memo} from "react";
import {Text, StyleSheet} from "react-native";

export const ErrorMessage = memo(({message, color}: {message: string; color: string}) => (
    <Text style={{...styles.error, color}}>{message}</Text>
));

const styles = StyleSheet.create({
    error: {
        fontSize: 15,
        fontFamily: "PoppinsRegular",
        textTransform: "none",
    },
});
