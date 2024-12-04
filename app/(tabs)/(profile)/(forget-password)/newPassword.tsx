import React, {useState} from "react";
import {KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";
import {ForgetPasswordLayout} from "@/layouts/forgetPasswordLayout.tsx";
import {BackIcon} from "@/components/ui/backIcon.tsx";
import {useThemeColor} from "@/hooks/useThemeColor";
import {loadAllAsset} from "@/constants/load_assets";
import {RoundedBtn} from "@/components/ui/RoundedBtn.tsx";
import {RoundedInputPassword} from "@/components/ui/RoundedInputPassword.tsx";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {ErrorMessage} from "@/components/ui/errorMessage.tsx";
import {router} from "expo-router";


const assets = loadAllAsset();
const newPasswordSchema = yup.object().shape({
    newPassword: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
    confirmPassword: yup
        .string()
        .required('Please confirm your password')
        .oneOf([yup.ref('password')], 'Passwords must match'),
});

interface INewPassword {
    newPassword: string;
    confirmPassword: string;
}

interface Secure {
    password: boolean;
    confirmPassword: boolean;
}

const NewPassword = (): React.JSX.Element => {
    const theme = useThemeColor();
    const [isSecure, setIsSecure] = useState<Secure>({
        password: true,
        confirmPassword: true,
    });
    const {formState, handleSubmit, control} = useForm<INewPassword>({
        resolver: yupResolver(newPasswordSchema),
        defaultValues: {
            newPassword: "",
            confirmPassword: "",
        },
    });

    const togglePasswordIcon = () => {
        setIsSecure(cur => ({
            ...cur,
            password: !cur.password,
        }));
    }

    const toggleConfirmPasswordIcon = () => {
        setIsSecure(cur => ({
            ...cur,
            confirmPassword: !cur.confirmPassword,
        }));
    }

    return (
        <ForgetPasswordLayout
            goBackIcon={<BackIcon navigation={router}/>}
            icon={assets.lock}
            activeCurrentIndicator={3}
            pageTitle="Reset Password"
            caption="It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum."
        >
            <KeyboardAvoidingView
                style={styles.child_wrapper}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={{marginTop: 12}}>
                    <View style={styles.form_wrapper}>
                        <Controller
                            name="newPassword"
                            control={control}
                            render={({field}) => {
                                return (
                                    <RoundedInputPassword
                                        secureTextEntry={isSecure.password}
                                        toggleIcon={togglePasswordIcon}
                                        onChangeText={field.onChange}
                                        value={field.value}
                                        placeholder="New Password"
                                    />
                                )
                            }}
                        />
                        {(formState.errors.newPassword && formState.errors.newPassword.message) && <ErrorMessage message={formState.errors.newPassword.message} color={theme.error}/>}

                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({field}) => {
                                return (
                                    <RoundedInputPassword
                                        secureTextEntry={isSecure.confirmPassword}
                                        toggleIcon={toggleConfirmPasswordIcon}
                                        onChangeText={field.onChange}
                                        value={field.value}
                                        placeholder="Confirm New Password"
                                    />
                                )
                            }}
                        />
                        {(formState.errors.confirmPassword && formState.errors.confirmPassword.message) && <ErrorMessage message={formState.errors.confirmPassword.message} color={theme.error}/>}
                    </View>
                    <RoundedBtn
                        handler={() => null}
                        title="Submiting"
                    />
                </View>
            </KeyboardAvoidingView>

        </ForgetPasswordLayout>
    )
}

const styles = StyleSheet.create({
    child_wrapper: {
        gap: 10,
    },
    form_wrapper: {
        display: "flex",
        gap: 7,
        marginBottom: 25,
    }
});


export default NewPassword
