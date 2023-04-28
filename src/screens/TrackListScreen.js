import React from "react";
import {View, StyleSheet, Text, Button} from "react-native"

export default TrackListScreen = ({navigation}) => {
    return <View style={styles.container}>
        <Text>TrackListScreen</Text>
        <Button
        title="Go to Track Detail"
        onPress={() =>{
            navigation.navigate('TrackDetail');
        }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        font: 12,
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})