import '../_mockLocation';
import React, { useEffect, useState } from "react";
import {View, StyleSheet} from "react-native";
import Mymap from "../components/Mymap";
import { SafeAreaView } from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { Text } from "react-native-elements";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, requestBackgroundPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";


export default TrackCreateScreen = () => {
    const [err,setErr] = useState(null);
    const startWatching = async () => {
        try{
            await requestForegroundPermissionsAsync();
            await requestBackgroundPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            }, 
            location => {
                console.log(location)
            });
        }
        catch(e){
            setErr("Please enable location Permissions");
        }
    }

    useEffect(() =>{
        startWatching();
    },[]);

    return <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <Text h2>TrackCreateScreen</Text>
        <Mymap/>
        {err? <Text style={styles.errorMessage}>Please enable location services</Text>: null}
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
    errorMessage: {
        fontSize: 14,
        marginLeft: 20,
        color: 'red',
    }
})