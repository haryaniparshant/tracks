import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

const trackReducer = (state,action) => {
    switch (action.type){
        default: 
            return state;
    }
};

const fetchTrack = dispatch => () =>{
    
}

const createTrack = dispatch => async (name, locations) =>{
    try{
        await tracker.post('/tracks',{name, locations});
    }
    catch(err){
        console.log(err);
    }
}

export const {Provider, Context} = createDataContext(
    trackReducer,
    {fetchTrack,createTrack},
    []
);