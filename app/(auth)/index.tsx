import React, {useState} from "react";
import {KeyboardAvoidingView, StyleSheet, Platform, TouchableOpacity, View, Text} from "react-native";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {AuthLayout} from "@/layouts/authLayout.tsx";
import {RoundedInput} from "@/components/ui/RoundedInput.tsx";
import {loadAllAsset} from "@/constants/load_assets";
import {useThemeColor} from "@/hooks/useThemeColor";
import {RoundedInputPassword} from "@/components/ui/RoundedInputPassword.tsx";
import {ErrorMessage} from "@/components/ui/errorMessage.tsx";
import {RoundedBtn} from "@/components/ui/RoundedBtn.tsx";
import {router} from "expo-router";

const assets = loadAllAsset();
const schema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email address or username is required"),
    password: yup.string().required("Password is required").min(8, "Password must contain at least 8 characters"),
});

interface SignInInput {
    email: string;
    password: string;
}

const Index = (): React.JSX.Element => {
    const theme = useThemeColor();
    const [isPasswordSecure, setIsPasswordSecure] = useState<boolean>(true);
    const {formState, handleSubmit, control, getValues} = useForm<SignInInput>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const createAccountHandle = () => router.navigate("signup");
    const forgetPasswordHandler = () => {
        const userEmail: string = getValues("email");
        router.navigate({
            pathname: "fgtemail",
            params: {
                email: userEmail.length ? userEmail : "",
            },
        });
    };
    const passwordVisibilityHandle = () => {
        setIsPasswordSecure(current => !current);
    };
    const submitHandler = (formData: SignInInput) => {
        console.log(formData);
    };


    return (
        <AuthLayout
            icon={assets.wave}
            pageTitle="Sign in"
        >
            <KeyboardAvoidingView
                style={styles.child_wrapper}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
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
                            toggleIcon={passwordVisibilityHandle}
                            placeholder="Password"
                            secureTextEntry={isPasswordSecure}
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

                <TouchableOpacity onPress={forgetPasswordHandler} activeOpacity={0.6}>
                    <Text style={{...styles.normal_txt, textAlign: "right"}}>Forget Password?</Text>
                </TouchableOpacity>
                <RoundedBtn
                    title="Log In"
                    handler={handleSubmit(submitHandler)}
                />
                <View style={styles.create_acct_wrapper}>
                    <Text style={styles.normal_txt}>Don’t have account?</Text>
                    <TouchableOpacity onPress={createAccountHandle}>
                        <Text style={{...styles.signup_btn, color: theme.blueText}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </AuthLayout>
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
    input:{
        borderRadius: 10,
        width: "100%",
        borderWidth: 1,
        borderColor: "transparent",
        height: 60,
        paddingHorizontal: 20,
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        fontWeight: "regular",
    },
    create_acct_wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 5,
    },
    signup_btn: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        fontWeight: "regular",
    },
    normal_txt: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        fontWeight: "regular",
    },
});

export default Index;
