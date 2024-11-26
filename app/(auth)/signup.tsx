import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View,} from "react-native";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {AuthLayout} from "@/layouts/authLayout.tsx";
import {RoundedInput} from "@/components/ui/RoundedInput.tsx";
import {loadAllAsset} from "@/constants/load_assets";
import {useThemeColor} from "@/hooks/useThemeColor";
import {RoundedInputPassword} from "@/components/ui/RoundedInputPassword.tsx";
import {ErrorMessage} from "@/components/ui/errorMessage.tsx";
import {CheckBox} from "@/components/ui/checkBox.tsx";

const assets = loadAllAsset();
const schema = yup.object().shape({
    fullName: yup.string().required("Fullname is required"),
    email: yup.string().email("Invalid email address").required("Email address or username is required"),
    password: yup.string().required("Password is required").min(8, "Password must contain at least 8 characters"),
    hasAgreed: yup.boolean().required(),
});

interface SignUpInput {
    fullName: string;
    email: string;
    password: string;
    hasAgreed: boolean;
}
const Signup = ({navigation, route}): React.JSX.Element => {
    const theme = useThemeColor();
    const [isSecure, setIsSecure] = useState<boolean>(true)
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const {formState, handleSubmit, control, setValue, getValues, watch} = useForm<SignUpInput>({
        resolver: yupResolver(schema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            hasAgreed: false,
        },
    });
    const handler = () => setIsSecure(cur => !cur);
    const toggleChecked = () => {
        setIsChecked(cur => !cur);
    }

    useEffect(() => {
        if (formState.isDirty) {
            //setValue("hasAgreed", isChecked);
        }
    }, [isChecked])

    return (
        <ScrollView>
            <AuthLayout
                icon={assets.claps}
                pageTitle="Sign up"
            >
                <KeyboardAvoidingView
                    style={styles.child_wrapper}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <Controller
                        name="fullName"
                        control={control}
                        render={({field}) => (
                            <RoundedInput
                                placeholder="Full Name"
                                onChangeText={field.onChange}
                                value={field.value}
                            />
                        )}
                    />
                    {(formState.errors.fullName && formState.errors.fullName.message) && <ErrorMessage message={formState.errors.fullName.message} color={theme.error}/>}

                    <Controller
                        name="email"
                        control={control}
                        render={({field}) => (
                            <RoundedInput
                                placeholder="Email"
                                onChangeText={field.onChange}
                                value={field.value}
                            />
                        )}
                    />
                    {(formState.errors.email && formState.errors.email.message) && <ErrorMessage message={formState.errors.email.message} color={theme.error}/>}

                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <RoundedInputPassword
                                toggleIcon={handler}
                                placeholder="Password"
                                secureTextEntry={isSecure}
                                cursorColor={theme.inputPlaceholder}
                                passwordRules="On"
                                spellCheck={true}
                                enablesReturnKeyAutomatically={true}
                                onChangeText={field.onChange}
                                value={field.value}
                            />
                        )}
                    />
                    {(formState.errors.password && formState.errors.password.message) && <ErrorMessage message={formState.errors.password.message} color={theme.error}/>}
                </KeyboardAvoidingView>
                <View style={styles.check_box_wrapper}>
                    <CheckBox
                        color={theme.primary}
                        isChecked={isChecked}
                        toggleIsChecked={toggleChecked}
                    />
                    <Text style={{...styles.normal_txt, color: theme.background}}>
                        I agree to The Terms of Service and Privacy
                        Policy
                    </Text>
                </View>
            </AuthLayout>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    child_wrapper: {
        marginHorizontal: 25,
        marginTop: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 10,
    },
    check_box_wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 6,
        marginHorizontal: 25,
        marginTop: 10,
    },
    normal_txt: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        fontWeight: "regular",
    },
});

export default Signup;
