import React, { useContext } from "react";
import {View, StyleSheet, StatusBar} from "react-native"
import { Button, Text, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { useState } from "react";
import { Context as AuthContext } from "../context/AuthContext";

export default SignupScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {state, signup} = useContext(AuthContext);

    return <View style={styles.container}>
        <StatusBar backgroundColor = '#fff' />
        <Spacer>
        <Text h3>Sign up for Tracker</Text>
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
                signup({email,password});
            }}
            />
        </Spacer>
    </View>
}
SignupScreen.navigationOptions = ({navigation}) =>{
    return {
      title: 'Signup Page',    
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
    }
})