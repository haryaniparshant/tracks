import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from 'react-native-maps';


export default Mymap = () => {
    return <MapView style={styles.map}/>
};

const styles = StyleSheet.create({
    map: {
        height: '50%',
        width: '90%',
        margin: 20,
    }
});