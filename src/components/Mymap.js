import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, {Polyline} from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, requestBackgroundPermissionsAsync } from "expo-location";


export default Mymap = () => {
    let points = [];
    for(let i = 0; i < 20;i++){
        points.push({
            latitude: 37.33233 + i * 0.001,
            longitude: -122.03121 + i * 0.001,
        })
    }

    return <MapView 
    style={styles.map}
    initialRegion={{
        latitude: 24.8376369,
        longitude: 67.0285089,
        latitudeDelta: 0.01,
        longitudeDelta: 0.1,
    }}
    >
        <Polyline coordinates={points}/>
    </MapView>
};

const styles = StyleSheet.create({
    map: {
        height: '50%',
        width: '90%',
        margin: 20,
    }
});