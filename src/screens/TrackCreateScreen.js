import '../_mockLocation';
import React, { useContext } from "react";
import {View, StyleSheet} from "react-native";
import Mymap from "../components/Mymap";
import { SafeAreaView } from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { Text } from "react-native-elements";
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from '../components/TrackForm';
import { add } from 'react-native-reanimated';

const TrackCreateScreen = ({isFocused}) => {
        
    const {state, addLocation} = useContext(LocationContext); 

    const [err] = useLocation(isFocused,(location) =>{
        addLocation(location,state.recording);
    });

    return <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <Text h2>TrackCreateScreen</Text>
        <Mymap/>
        {err? <Text style={styles.errorMessage}>Please enable location services</Text>: null}
        <TrackForm/>
    </SafeAreaView>
}

export default withNavigationFocus(TrackCreateScreen);

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