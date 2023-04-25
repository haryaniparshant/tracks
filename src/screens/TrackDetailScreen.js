import React from "react";
import {View, StyleSheet, Text} from "react-native"

export default TrackDetailScreen = () => {
    return <View style={styles.container}>
        <Text>TrackDetailScreen</Text>
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