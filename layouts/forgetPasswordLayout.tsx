import React, {PropsWithChildren, memo} from "react";
import {
    SafeAreaView,
    useWindowDimensions,
    StyleSheet,
    StatusBar,
    View,
    Text,
    ImageSourcePropType,
} from "react-native";
import {IconContainer} from "@/components/ui/IconContainer.tsx";
import {useThemeColor} from "@/hooks/useThemeColor";
import {ScreenIndicator} from "@/components/ui/ScreenIndicator.tsx";
import {loadAllAsset} from "@/constants/load_assets";

type Props = {
    icon: ImageSourcePropType;
    pageTitle: string;
    goBackIcon: React.JSX.Element;
    activeCurrentIndicator: number;
    caption: string;

} & PropsWithChildren;

const assets = loadAllAsset();

export const ForgetPasswordLayout = memo(({children, caption, pageTitle, icon, goBackIcon, activeCurrentIndicator}: Props): React.JSX.Element => {
    const theme = useThemeColor();
    const {width} = useWindowDimensions();

    return (
        <SafeAreaView style={{...styles.wrapper, backgroundColor: theme.white}}>
            <StatusBar
                backgroundColor={theme.white}
                translucent={true}
                animated={true}
            />
            <View style={{backgroundColor: theme.white, ...styles.pre_container}}>
                {goBackIcon}
                <View style={styles.indicator_container}>
                    <ScreenIndicator
                        current={activeCurrentIndicator}
                        totalIndicator={3}
                        indicatorLength={30}
                        activeColor={theme.primary}
                        inActiveColor={theme.translucent}
                        height={4}
                    />
                </View>
            </View>
            <View style={{...styles.container, width: width}}>
                <View style={styles.container_icon}>
                    <IconContainer src={icon} styles={{...styles.icon_container, backgroundColor: theme.primaryShad2}}/>
                </View>
                <Text style={{...styles.screenTitle, color: theme.primaryShad1}}>
                    {pageTitle}
                </Text>
                <Text style={{...styles.caption, color: theme.houseGray}}>
                    {caption}
                </Text>
                <View style={styles.children_container}>
                    {children}
                </View>
            </View>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    pre_container: {
        justifyContent: "center",
        flex: 1,
    },
    container_icon: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    indicator_container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        width: "100%",
    },
    wrapper: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        flex: 5,
    },
    icon_container: {
        height: 80,
        width: 80,
        borderRadius: 20,
        marginBottom: 25,
    },
    screenTitle: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "semibold",
        textTransform: "capitalize",
        fontFamily: "PoppinsSemiBold",
    },
    caption: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "regular",
        lineHeight: 22,
        marginHorizontal: 25,
        marginTop: 12,
        fontFamily: "PoppinsRegular",
    },
    children_container: {
        marginHorizontal: 22,
        marginTop: 25,
        display: "flex",
        flexDirection: "column",
        gap: 8,
    }
});

