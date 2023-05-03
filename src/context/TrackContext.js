import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

const trackReducer = (state,action) => {
    switch (action.type){
        case 'fetch':
            return action.payload;
        default: 
            return state;
    }
};

const fetchTrack = dispatch => async () =>{
    try{
        const response = await tracker.get('/tracks');
        dispatch({type: 'fetch', payload: response.data})
    }
    catch(err){
        console.log(err);
    }
};

const createTrack = dispatch => async (name, locations) =>{
    try{
        await tracker.post('/tracks',{name, locations});
    }
    catch(err){
        console.log(err);
    }
};

export const {Provider, Context} = createDataContext(
    trackReducer,
    {fetchTrack,createTrack},
    []
);