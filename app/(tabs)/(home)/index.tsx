import React from "react";
import {StyleSheet,Text, SafeAreaView, StatusBar} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";

export default function Index(): React.JSX.Element {
    const theme = useThemeColor();
    return (
        <SafeAreaView style={{...styles.container, backgroundColor: theme.white}}>
            <StatusBar
                backgroundColor={theme.white}
            />
            <Text>Home</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
})
