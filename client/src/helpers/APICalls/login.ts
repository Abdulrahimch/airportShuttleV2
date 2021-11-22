import axios from 'axios';
import { AuthApiData } from '../../interface/AuthApiData';

const login = async (username: string, password: string): Promise<AuthApiData> => {
    const fetchData = { username, password };
    return await axios.post('/auth/login', fetchData)
        .then((res) => res.data)
        .catch(() => ({
            error: {message: 'Unable to connect to server. Please try again'}
        }))
};

export default login;

  