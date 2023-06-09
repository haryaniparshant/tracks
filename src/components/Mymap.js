import React, {useContext} from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import MapView, {Polyline, Circle} from 'react-native-maps';
import { Context as LocationContext } from "../context/LocationContext";


export default Mymap = () => {

    const {state: {currentLocation, locations} } = useContext(LocationContext);

    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop: 20}} />
    }

    return <MapView 
    style={styles.map}
    initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }}
    >
        <Circle
        center={currentLocation.coords}
        radius={15}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
        />
        <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
};

const styles = StyleSheet.create({
    map: {
        height: '50%',
        width: '90%',
        margin: 20,
    }
});