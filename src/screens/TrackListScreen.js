import React, {useContext} from "react";
import {View, StyleSheet, Text, Button, FlatList, TouchableOpacity} from "react-native"
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "react-native-elements";

export default TrackListScreen = ({navigation}) => {
    const {signout} = useContext(AuthContext);
    const {state, fetchTrack} = useContext(TrackContext);

    return <View>
        <NavigationEvents onWillFocus={fetchTrack} />
        <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({item}) =>{
            return <TouchableOpacity onPress={() =>{
                navigation.navigate('TrackDetail', {_id : item._id})
            }}>
                <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                </ListItem>
            </TouchableOpacity>
        }}
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