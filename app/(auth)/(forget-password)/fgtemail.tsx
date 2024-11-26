import React from "react";
import {View} from "react-native";
import {loadAllAsset} from "@/constants/load_assets";
import {ForgetPasswordLayout} from "@/layouts/forgetPasswordLayout.tsx";
import {useThemeColor} from "@/hooks/useThemeColor";
import {RoundedInput} from "@/components/ui/RoundedInput.tsx";
import {useForm, Controller} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {ErrorMessage} from "@/components/ui/errorMessage.tsx";
import {RoundedBtn} from "@/components/ui/RoundedBtn.tsx";
import {BackIcon} from "@/components/ui/backIcon.tsx";
import {router, useLocalSearchParams} from "expo-router"

const schema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("User Email is required")
});

interface IForgotten {
    email: string;
}

const assets = loadAllAsset();
const prototype = "ogunwole888@gmail.com"

const Fgtemail = (): React.JSX.Element => {
    const theme = useThemeColor();
    const val = useLocalSearchParams<{email: string}>();
    console.log("Params", val)
    const {formState, handleSubmit, control} = useForm<IForgotten>({
        defaultValues: {
            email: val.email,
        },
        resolver: yupResolver(schema),
    });

    const submitHandler = (data: IForgotten) => {
        console.log(data);
        router.navigate("otp");
    }

    return (
        <ForgetPasswordLayout
            activeCurrentIndicator={1}
            icon={assets.envelope}
            pageTitle="Forget Password"
            goBackIcon={
                <BackIcon navigation={router}/>
            }
            caption="It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum."
        >
            <Controller
                control={control}
                render={({field}) => {
                    return (
                        <RoundedInput
                            placeholder="Email"
                            keyboardType="email-address"
                            onChangeText={field.onChange}
                            value={field.value}
                        />
                    );
                }}
                name="email"
            />
            {(formState.errors.email && formState.errors.email.message) && <ErrorMessage message={formState.errors.email.message} color={theme.error}/>}
            <View style={{marginTop: 12}}>
                <RoundedBtn
                    handler={handleSubmit(submitHandler)}
                    title="Continue"
                />
            </View>
        </ForgetPasswordLayout>
    );
};

export default Fgtemail
