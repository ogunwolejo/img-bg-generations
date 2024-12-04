import {Tabs} from "expo-router"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {useThemeColor} from "@/hooks/useThemeColor";

export default function Layout() {
    const theme = useThemeColor();
    return (
        <Tabs
            screenOptions={{
                tabBarInActiveTintColor: theme.icon,
                tabBarActiveTintColor: theme.white,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: theme.background,
                    elevation: 5,
                }
            }}
        >
            <Tabs.Screen
                name="(home)"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="camera" color={color} />,
                }}
            />
            <Tabs.Screen
                name="(profile)"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => {
                        return (
                            <MaterialCommunityIcons size={28} name="account" color={color} />
                        );
                    }
                }}
            />
        </Tabs>
    )
}
