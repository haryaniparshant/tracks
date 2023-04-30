import { useState, useEffect } from "react";
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync, requestBackgroundPermissionsAsync } from "expo-location";

export default (shouldTrack,callback) => {

    const [err,setErr] = useState(null);
    const [subscriber,setSubscriber] = useState(null);

    const startWatching = async () => {
        try{
            await requestForegroundPermissionsAsync();
            await requestBackgroundPermissionsAsync();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            },callback);
            setSubscriber(sub);
        }
        catch(e){
            setErr("Please enable location Permissions");
        }
    }

    useEffect(() =>{
        if(shouldTrack){
            startWatching();
        }
        else{
            subscriber.remove();
            setSubscriber(null);
        }
    },[shouldTrack]);

    return [err]
    
}