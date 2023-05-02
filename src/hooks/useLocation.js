import { useState, useEffect } from "react";
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync, requestBackgroundPermissionsAsync } from "expo-location";

export default (shouldTrack,callback) => {

    const [err,setErr] = useState(null);

    useEffect(() =>{

        let subscriber;
        const startWatching = async () => {
            try{
                await requestForegroundPermissionsAsync();
                await requestBackgroundPermissionsAsync();
                const sub = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                },callback);
            }
            catch(e){
                setErr("Please enable location Permissions");
            }
        }

        if(shouldTrack){
            startWatching();
        }
        else{
            if (subscriber) {
                subscriber.remove();
            } 
            subscriber = null;
        }

        return () => {
            if(subscriber) {
                subscriber.remove()
            }
        }
    },[shouldTrack, callback]);

    return [err]
    
}