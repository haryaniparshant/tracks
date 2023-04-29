import React, {useContext} from "react";
import {View, StyleSheet, StatusBar} from "react-native"
import { Button, Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

export default AccountScreen = ({navigation}) => {
    const {signout} = useContext(AuthContext);

    return <View style={styles.container}>
        <StatusBar  
            backgroundColor = "#fff"  
            barStyle = "dark-content"   
            hidden = {false}    
            translucent = {true}  
        /> 
        <Button
        title="Sign Out"
        onPress={() =>{
            signout();
        }}
        />
    </View>
}


AccountScreen.navigationOptions = ({navigation}) =>{
    return {
      title: 'Account Screen',    
      headerStyle: {
        backgroundColor: 'royalblue'
      },
    };
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