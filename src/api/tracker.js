import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const  instance = axios.create({
    baseURL: 'https://fa2e-2407-aa80-15-f7e2-f8c6-84c6-ec12-4c2d.ngrok-free.app',
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        Promise.reject(err);
    },
);

export default instance;