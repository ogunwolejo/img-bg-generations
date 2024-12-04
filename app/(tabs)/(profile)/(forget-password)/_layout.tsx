import {Stack} from "expo-router"

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="otp" options={{headerShown: false}} />
            <Stack.Screen name="newPassword" options={{headerShown: false}} />
        </Stack>
    )
}
