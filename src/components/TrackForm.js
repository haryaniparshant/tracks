import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { useContext } from "react";
import {Context as LocationContext} from "../context/LocationContext";
import useSaveTrack from '../hooks/useSaveTrack';


export default TrackForm = () => {
    const {state : {name,recording, locations}, startRecording, stopRecording, changeName} = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return <View>
        <Spacer>
            <Input placeholder="Enter Name" value={name} onChangeText={changeName}/>
        </Spacer>
        {recording ? <Button
        title="Stop"
        onPress={stopRecording}
        style={styles.button}
        />: <Button
        title="Start Recording"
        onPress={startRecording}
        style={styles.button}
        />}
        <Spacer/>
        {!recording && locations.length  ? <Button
        title="Save Recording"
        onPress={saveTrack}
        style={styles.button}
        />: null}
    </View>
}

const styles = StyleSheet.create({ 
    button: {
        marginLeft: 30,
        marginRight: 30,
    }
})