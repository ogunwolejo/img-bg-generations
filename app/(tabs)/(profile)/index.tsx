import React, {memo, Fragment} from "react";
import {View, StyleSheet, TouchableOpacity, Text, SafeAreaView, StatusBar, Image} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";
import {ProfileInfo} from "@/components/ui/ProfileInfo";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {router} from "expo-router"

// Profile for un-authenticated user
const UnAuthUserProfile = memo(() => {
    const theme = useThemeColor();
    const pressHandle = () => {
        router.push("(auth)")
    }
    return (
        <Fragment>
            <View style={{...styles.profile_icon, borderColor: theme.background}}>
                <MaterialCommunityIcons size={120} color={theme.background} name="account"/>
            </View>
            <TouchableOpacity style={styles.btn} onPress={pressHandle}>
                <Text style={{...styles.text, color: theme.primaryShad1}}>Login</Text>
            </TouchableOpacity>
        </Fragment>
    )
});

// Profile for authenticated user
const AuthUserProfile = memo(() => {
    const theme = useThemeColor();
    const signOutHandle = () => {}
    return (
        <Fragment>
            <View style={{...styles.profile_pic_wrapper, borderColor: theme.background}}>
                <Image
                    style={styles.profile_pic}
                    source={require("@/assets/images/misc/profile.jpg")}
                    resizeMode="cover"
                    //loadingIndicatorSource={}
                />
            </View>
            <Text style={styles.fullName}>Ogunwole Joshua</Text>
            <ProfileInfo />
        </Fragment>
    )
})

export default function UserProfile(): React.JSX.Element {
    const theme = useThemeColor();
    return (
        <SafeAreaView style={{...styles.container, backgroundColor: theme.white}}>
            <StatusBar
                backgroundColor={theme.white}
            />
            <View style={styles.profile_container}>
                <AuthUserProfile />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    profile_container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        marginVertical: 8,
    },
    profile_pic_wrapper: {
        borderWidth: 2,
        height: 200,
        width: 200,
        alignSelf: "center",
        borderRadius: "50%",
        marginBottom: 6,
        overflow: "hidden",
    },
    profile_pic: {
        height: "100%",
        width: "100%",
    },
    profile_icon: {
        borderWidth: 2,
        height: 200,
        width: 200,
        alignSelf: "center",
        borderRadius: "50%",
        marginBottom: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        alignSelf: "center",
    },
    text: {
        textAlign: "center",
        fontFamily: "PoppinsSemiBold",
        fontSize: 18,
        letterSpacing: 1.5,
        fontWeight: 600,
    },
    fullName: {
        textAlign: "center",
        fontFamily: "PoppinsMedium",
        fontSize: 17,
        textTransform: "capitalize",
        marginBottom: 6,
        letterSpacing: 1.2,
    },
})
