import React from "react";
import {KeyboardAvoidingView, Text, TouchableOpacity, View, StyleSheet, Platform} from "react-native";
import {loadAllAsset} from "@/constants/load_assets";
import {useThemeColor} from "@/hooks/useThemeColor";
import {ForgetPasswordLayout} from "@/layouts/forgetPasswordLayout.tsx";
import {RoundedBtn} from "@/components/ui/RoundedBtn.tsx";
import {BackIcon} from "@/components/ui/backIcon.tsx";
import {OtpInput} from "@/components/ui/OtpInput.tsx";
import {router} from "expo-router";

const assets = loadAllAsset();
const ForgetPasswordOtp = ({navigation, route}): React.JSX.Element => {
    const theme = useThemeColor();
    const continueHandle = () => router.replace("newPassword");
    return (
        <ForgetPasswordLayout
            activeCurrentIndicator={2}
            icon={assets.envelope}
            pageTitle="Enter OTP"
            caption="Enter the OTP code we just sent you on your registered Email/Phone number"
            goBackIcon={
                <BackIcon navigation={navigation} route={route}/>
            }

        >
            <KeyboardAvoidingView
                style={styles.child_wrapper}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={{marginTop: 12}}>
                    <View style={{marginBottom: 25}}>
                        <OtpInput/>
                    </View>
                    <RoundedBtn
                        handler={continueHandle}
                        title="Reset Password"
                    />
                </View>
                <View style={styles.resend_wrapper}>
                    <Text style={styles.normal_txt}>Didn’t get OTP?</Text>
                    <TouchableOpacity>
                        <Text style={{...styles.link_btn, color: theme.blueText}}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ForgetPasswordLayout>
    );
}

const styles = StyleSheet.create({
    resend_wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 5,
        marginTop: 10,
    },
    normal_txt: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        fontWeight: "regular",
    },
    link_btn: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        fontWeight: "regular",
    },
    child_wrapper: {
        gap: 10,
    },
});

export default ForgetPasswordOtp;
