import React, {useContext} from "react";
import {View, StyleSheet, StatusBar} from "react-native"
import { Button, Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";
import SafeViewAndroid from "../components/SafeViewAndroid";


export default AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <Text h2>Account Screen</Text>
    <View style={styles.container}>
        <StatusBar  
            backgroundColor = "#fff"  
            barStyle = "dark-content"   
            hidden = {false}    
            translucent = {true}  
        /> 
        <Button
        title="Sign Out"
        onPress={signout}
        />
    </View>
    </SafeAreaView>
    
};

const styles = StyleSheet.create({
    container: {
        font: 12,
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})