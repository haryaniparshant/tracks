import React from "react";
import {View, StyleSheet, Text} from "react-native"
import TrackDetailScreen from "./TrackDetailScreen";

export default TrackCreateScreen = () => {
    return <View style={styles.container}>
        <Text>TrackCreateScreen</Text>
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