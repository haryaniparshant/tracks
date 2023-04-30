import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "./Spacer";

export default TrackForm = () => {
    return <View>
        <Spacer>
            <Input placeholder="Enter Name"/>
        </Spacer>
        <Button
        title="Submit"
        onPress={() => {
        }}
        style={styles.button}
        />
    </View>
}

const styles = StyleSheet.create({ 
    button: {
        marginLeft: 30,
        marginRight: 30,
    }
})