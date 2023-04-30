import React from "react";
import {View, StyleSheet} from "react-native"
import TrackDetailScreen from "./TrackDetailScreen";
import Mymap from "../components/Mymap";
import { SafeAreaView } from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { Text } from "react-native-elements";

export default TrackCreateScreen = () => {
    return <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <Text h2>TrackCreateScreen</Text>
        <Mymap/>
    </SafeAreaView>
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