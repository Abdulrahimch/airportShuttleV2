import axios from 'axios';
import { PaymentApiData, Payment } from '../../interface/AgencyPayment';

export const postPayment = async(inputs: Payment): Promise<PaymentApiData> => {
    return await axios.post('/payment/', inputs)
            .then((res) => res.data)
            .catch(() => ({
                error: {message: 'Unable to connect to server. Please try again'}
            }));
};
