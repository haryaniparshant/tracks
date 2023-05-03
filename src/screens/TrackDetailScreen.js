import React, {useContext} from "react";
import {View, StyleSheet} from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import { Text } from "react-native-elements";
import MapView, {Polyline} from "react-native-maps";

export default TrackDetailScreen = ({navigation}) => {


    const {state} = useContext(TrackContext);
    const _id = navigation.getParam('_id');
    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;


    return<> 
    <Text h2>{track.name}</Text>
        <View style={styles.container}>
        <MapView
        initialRegion={{
            ...initialCoords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01, 
        }}
        style={styles.map}
        >
            <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
        </MapView>
        </View>
        </>
}

const styles = StyleSheet.create({
    container: {
        font: 12,
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        height: '90%',
        width: '90%',
        margin: 20,
    }
})