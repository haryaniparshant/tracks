import React from "react";
import {View, StyleSheet, Text} from "react-native"

export default AccountScreen = () => {
    return <View style={styles.container}>
        <Text>AccountScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        font: 12,
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'center'
    },
})