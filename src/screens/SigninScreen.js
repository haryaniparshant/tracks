import React, { useContext, useEffect } from "react";
import {View, StyleSheet, StatusBar} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

export default SigninScreen = () => {

    const {state, signin, clearErrorMessage} = useContext(AuthContext);

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
        headerText="Sign in to Tracker" 
        errorMessage={state.errorMessage} 
        submitButtonText="Sign In"
        onSubmit={signin}
    />
    <NavLink
    text="Don't have an account? Sign up"
    routeName="Signup"
    />
</View>
};

SigninScreen.navigationOptions = () =>{
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
})
