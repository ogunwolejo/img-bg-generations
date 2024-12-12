import React, {PropsWithChildren, useMemo, memo} from "react";
import {SafeAreaView, useWindowDimensions, StyleSheet, View, Text, ImageSourcePropType, StatusBar} from "react-native";
import {SocialBtn} from "@/components/ui/socialBtn.tsx";
import {IconContainer} from "@/components/ui/IconContainer.tsx";
import {loadAllAsset} from "@/constants/load_assets";
import {Dash} from "@/components/ui/dash.tsx";
import {useThemeColor} from "@/hooks/useThemeColor"
//import useGoogleSignIn from "@/hooks/useGoogleSignIn";

type Props = {
    icon: ImageSourcePropType;
    pageTitle: string;

} & PropsWithChildren
const assets = loadAllAsset();
export const AuthLayout = memo(({children, pageTitle, icon}: Props): React.JSX.Element => {
    //const {signIn} = useGoogleSignIn();
    const theme = useThemeColor();
    const {height, width} = useWindowDimensions();
    const dashLength: number = useMemo(() => {
        return (width / 3) + 20; // we divide the screen width by three and also take into account the horizontal margin
    }, [width]);

    return (
        <SafeAreaView style={{...styles.wrapper, backgroundColor: theme.white}}>
            <StatusBar
                backgroundColor={theme.white}
                animated={true}
            />
            <View style={{...styles.container, height: height, width: width}}>
                <View style={styles.container_icon}>
                    <IconContainer src={icon} styles={{...styles.icon_container, backgroundColor: theme.primaryShad2}}/>
                </View>
                <Text style={{...styles.screenTitle, color: theme.primaryShad1}}>
                    {pageTitle}
                </Text>
                <Text style={{...styles.caption, color: theme.houseGray}}>
                    It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum.
                </Text>
                <View style={styles.social_container}>
                    <SocialBtn icon={assets.facebook} text="Facebook" onPress={() => {}} />
                    <SocialBtn icon={assets.google} text="Google" onPress={null} />
                </View>
                <View style={styles.divide_container}>
                    <Dash length={dashLength} bg={theme.gray1}/>
                    <Text style={{...styles.divide_text, color: theme.text1}}>or</Text>
                    <Dash length={dashLength} bg={theme.gray1}/>
                </View>
                {children}
            </View>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container_icon: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    wrapper: {
        flex: 1,
    },
   container: {
       display: "flex",
       flexDirection: "column",
       justifyContent: "center",
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
    social_container: {
       display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        marginHorizontal: 15,
        marginVertical: 30,
        alignItems: "center",
    },
    divide_container: {
       flexDirection: "row",
        display: "flex",
        marginHorizontal: 25,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    divide_text: {
        textTransform: "capitalize",
        fontFamily: "PoppinsRegular",
        fontSize: 14,
    },
});

