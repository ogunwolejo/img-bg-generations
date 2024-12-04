import React, {memo} from "react"
import {View, StyleSheet, Text} from "react-native"


const ProfileBox = memo(() => {
    return (
        <View style={styles.profile_box}>
            <Text style={styles.bigText}>
                50
            </Text>
            <Text style={styles.smallText}>
                Pictures generated
            </Text>
        </View>
    )
})

export const ProfileInfo = (): React.JSX.Element => {
    return (
        <View style={styles.profile_container}>
        </View>
    )
}

const styles = StyleSheet.create({
    profile_container: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "center",
        gap: 16,
        alignItems: "center"
    },
    profile_box: {
        height: 50,
        width: "40%",
        borderRadius: 12,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    bigText: {
        fontFamily: "PoppinsBold",
        fontSize: 16
    },
    smallText: {
        fontFamily: "PoppinsRegular",
        fontSize: 12,
        fontStyle: "normal"
    },
})
