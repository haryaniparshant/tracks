import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import {navigate} from '../navigationRef'

const authReducer = (state,action) => {
    switch (action.type) {
        case 'add_error':
            return {...state,errorMessage: action.payload};
        case 'sign_up':
            return {errorMessage: '',token:action.payload}
        default:
            return state;
    };
};

const signup = (dispatch) => async ({email, password})=>{
        try{
            const response = await tracker.post('/signup',{email,password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'sign_up', payload: response.data.token});

            navigate('mainFlow');
        }
        catch(err){
            dispatch({type: 'add_error', payload: 'Something went wrong with signup'})
        }
}

const signin = (dispatch) => {
    return ({email, password})=>{

    }
}

const signout = (dispatch) => {
    return ({email, password})=>{

    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin,signup,signout},
    {token: null, errorMessage:''}
);