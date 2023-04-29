import React, { useContext } from "react";
import {View, StyleSheet, StatusBar} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm"; 
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

export default SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage } = useContext(AuthContext); 

    return <View style={styles.container}>
        <StatusBar  
            backgroundColor = "#fff"  
            barStyle = "dark-content"   
            hidden = {false}    
            translucent = {true}  
        />
        <NavigationEvents
        onWillBlur={clearErrorMessage}
        />
        <AuthForm
        headerText="Sign Up for Tracker" 
        errorMessage={state.errorMessage} 
        submitButtonText="Sign Up"
        onSubmit={signup}
        />
        <NavLink
            text="Already Have an Account? Sign in"
            routeName="Signin"
        />
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
})