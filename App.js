import { StyleSheet } from 'react-native';
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';


const switchNavigator = createSwitchNavigator({
  Resolve: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  },{
    initialRouteName: 'Signin',
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    },{
      initialRouteName: 'TrackList',
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  },{
    initialRouteName: 'trackListFlow',
  })
},{
  initialRouteName: 'Resolve'
})


const App = createAppContainer(switchNavigator);

export default () =>{
  return <TrackProvider>
  <LocationProvider>
    <AuthProvider>
    <App ref={(navigator) =>{
      setNavigator(navigator);
    }}/>
  </AuthProvider>
  </LocationProvider>
  </TrackProvider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
