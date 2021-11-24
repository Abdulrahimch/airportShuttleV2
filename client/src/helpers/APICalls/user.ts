import axios from 'axios';
import { AuthApiData } from '../../interface/AuthApiData';
import { Client } from '../../interface/Client';

export const postClient = (inputs: Client): Promise<AuthApiData> => {
    return axios.post('/users/', inputs)
        .then((res) => res.data)
        .catch(() => ({
            error: {message: 'Unable to connect to server. Please try again'}
        }))
}
