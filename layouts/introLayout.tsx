import React, {PropsWithChildren, memo} from "react";
import {SafeAreaView, StatusBar, StyleSheet, View, Image, Text, ImageSourcePropType} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";

type Props = {
    src:  ImageSourcePropType;
    bigText: string;
    smallText: string;
    caption: string;
    icon: ImageSourcePropType;
} & PropsWithChildren;

const IntroLayout = memo(({children, src, caption, bigText, smallText, icon}: Props): React.JSX.Element => {
    const theme = useThemeColor();

    return (
        <SafeAreaView style={{...styles.container, backgroundColor: theme.background}}>
            <StatusBar
                translucent={true}
                backgroundColor={theme.background}
            />
            <View style={styles.container_b}>
                <Image
                    style={styles.image}
                    source={src}
                />
                <View>
                    <Text
                        style={{
                            ...styles.bigText,
                            color: theme.white,
                            textAlign: "center",
                        }}
                    >
                        {bigText}
                    </Text>
                    <View style={{...styles.row, alignItems: "center"}}>
                        <Text style={{...styles.smallText, color: theme.white}}>{smallText}</Text>
                        <Image source={icon} />
                    </View>
                    <Text style={{...styles.caption, color: theme.gray1}}>
                        {caption}
                    </Text>
                </View>
                {children}
            </View>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backfaceVisibility: "hidden",
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    container_b: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "100%",
    },
    image: {
        marginHorizontal: "auto",
        marginTop: 15,
        maxWidth: 302,
        maxHeight: 302,
    },
    bigText: {
        fontSize: 32,
        fontFamily: "PoppinsSemiBold",
    },
    smallText: {
        fontSize: 24,
        fontFamily: "PoppinsMedium",
    },
    caption: {
        marginHorizontal: 20,
        marginTop: 15,
        fontSize: 16,
        fontFamily: "PoppinsRegular",
        textAlign: "center",
    },
});

export default IntroLayout;
