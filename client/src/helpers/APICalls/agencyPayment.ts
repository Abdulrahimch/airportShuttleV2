import axios from 'axios';
import { PaymentApiData, Payment } from '../../interface/AgencyPayment';

export const postPayment = async(inputs: Payment): Promise<PaymentApiData> => {
    return await axios.post('/agency-payment/', inputs)
            .then((res) => res.data)
            .catch(() => ({
                error: {message: 'Unable to connect to server. Please try again'}
            }));
};

export const getClientPayments = (id: String): Promise<PaymentApiData> => {
    return axios.get(`/agency-payment/${id}`)
            .then((res) => res.data)
            .catch(() => ({
                error: {message: 'Unable to connect to server. Please try again'}
            }));
};

interface Status {
    status: String;
    clientId: String;
}

export const updatePayment = (inputs: Status, id: string) => {
    return axios.patch(`/agency-payment/${id}`, inputs)
            .then((res) => res.data)
            .catch(() => ({
                error: {message: 'Unable to connect to server. Please try again'}
            }));
}