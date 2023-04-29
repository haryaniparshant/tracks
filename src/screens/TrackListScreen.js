import React, {useContext} from "react";
import {View, StyleSheet, Text, Button} from "react-native"
import { Context as AuthContext } from "../context/AuthContext";

export default TrackListScreen = ({navigation}) => {
    const {signout} = useContext(AuthContext);

    return <View style={styles.container}>
        <Text>TrackListScreen</Text>
        <Button
        title="Go to Track Detail"
        onPress={() =>{
            navigation.navigate('TrackDetail');
        }}
        />
        <Button
        title="Sign Out"
        onPress={signout}
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