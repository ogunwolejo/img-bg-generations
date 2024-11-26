import React from "react";
import IntroLayout from "@/layouts/introLayout.tsx";
import {StyleSheet, View, TouchableOpacity, Text} from "react-native";
import {ScreenIndicator} from "@/components/ui/ScreenIndicator.tsx";
import {loadAllAsset} from "@/constants/load_assets";
import {useThemeColor} from "@/hooks/useThemeColor";
import {router} from "expo-router"

const assets = loadAllAsset();

export default function Index(): React.JSX.Element {
    const theme = useThemeColor();
    const nextHandle = () => router.navigate("secondary");
    return (
        <IntroLayout
            src={require("@/assets/images/misc/Saly-22.png")}
            caption="Aenean eu lacinia ligula. Quisque eu risus erat. Aenean placerat sollicitudin lectus."
            bigText="The Simple Way to"
            smallText="find the best!s"
            icon={assets.ok}
        >
            <View style={styles.container}>
                <ScreenIndicator
                    current={1}
                    totalIndicator={2}
                    indicatorLength={50}
                    activeColor={theme.primary}
                />
                <TouchableOpacity onPress={nextHandle}>
                    <View style={styles.btn}>
                        <Text style={{...styles.text, color: theme.gray1}}>Next</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </IntroLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
    },
    btn: {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "medium",
        color: "white",
    },
});
