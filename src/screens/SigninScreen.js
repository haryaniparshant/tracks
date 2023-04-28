import React, { useContext } from "react";
import {View, StyleSheet, StatusBar} from "react-native"
import { Button, Text, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { useState } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { TouchableOpacity } from "react-native";

export default SigninScreen = ({navigation}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {state, signin} = useContext(AuthContext);


    return <View style={styles.container}>
    <StatusBar backgroundColor = '#fff' />
    <Spacer>
    <Text h3>Sign in to Tracker</Text>
    </Spacer>
    <Spacer/>
    <Input 
    label="Email"
    value={email}
    onChangeText={setEmail}
    autoCapitalize="none"
    autoCorrect={false}
    />
    <Spacer/>
    <Input
    secureTextEntry
    label="Password"
    value={password}
    onChangeText={setPassword}
    autoCapitalize="none"
    autoCorrect={false}
    />
    {state.errorMessage?<Text style={styles.errorMessage}>{state.errorMessage}</Text>:null}
    <Spacer>
        <Button
        title="Submit"
        onPress={()=>{
            signin({email,password});
        }}
        />
    </Spacer>
    <TouchableOpacity onPress={()=>{
        navigation.navigate('Signup')
    }}>
        <Text style={styles.link}>Don't Have an account? Sign up</Text>
    </TouchableOpacity>
</View>
}

SigninScreen.navigationOptions = ({navigation}) =>{
    return {
      title: 'Sign in Page',    
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
        marginBottom: 250,
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15,
    },
    link: {
        color: 'blue',
    }
})
